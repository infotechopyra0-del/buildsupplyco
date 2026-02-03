"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Image from 'next/image';
import { Spinner } from "@/components/ui/spinner"
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogPosts } from '@/entities';
import { format } from 'date-fns';

const mockBlogPosts: BlogPosts[] = [
  {
    _id: '1',
    title: 'The Ultimate Guide to Waterproofing Your Basement',
    content: 'Protecting your basement from water damage is crucial for the longevity and structural integrity of your property. This comprehensive guide explores various waterproofing solutions, from exterior membranes to interior sealants, and provides step-by-step application tips. Learn about the benefits of proper waterproofing, including preventing mold growth, preserving property value, and creating a healthier living environment. We\'ll cover common challenges and how our advanced waterproofing products can offer a durable and effective barrier against moisture.',
    publishDate: '2026-02-03',
    category:'Waterproofing Solutions',
    coverImage: '/images/TheUltimateGuidetoWaterproofingYourBasement.png',
    _createdDate: new Date('2026-01-01'),
    _updatedDate: new Date('2026-01-02'),
  },
  {
    _id: '2',
    title: 'Choosing the Right Tile Adhesive for Every Project',
    content: 'Selecting the correct tile adhesive is paramount for a successful and long-lasting tiling installation. With a myriad of options available, understanding the properties of different adhesives—such as cementitious, epoxy, and dispersion adhesives—is key. This article delves into factors like substrate type, tile material, environmental conditions, and traffic load to help you make an informed decision. Discover how our specialized tile adhesives ensure superior bond strength and durability for both residential and commercial applications.',
    publishDate: '2026-01-22',
    category:'Tile & Stone Adhesive and Grout',
    coverImage: '/images/ChoosingtheRightTileAdhesiveforEveryProject.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '3',
    title: '5 Common Mistakes in Concrete Repair and How to Avoid Them',
    content: 'Concrete repair can be a complex task, and even experienced professionals can make mistakes that compromise the repair\'s effectiveness and longevity. This article identifies five common pitfalls, including improper surface preparation, incorrect material selection, inadequate curing, and ignoring underlying issues. We provide practical advice and best practices to help you avoid these errors, ensuring your concrete repairs are durable, aesthetically pleasing, and structurally sound. Learn how our high-performance concrete repair solutions simplify the process.',
    publishDate: '2025-12-13',
    category:'Concrete Repair Solutions',
    coverImage: '/images/CrackSealEpoxyFiller.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '4',
    title: 'Innovations in Industrial Flooring: What\'s New?',
    content: 'The world of industrial flooring is constantly evolving, with new technologies and materials emerging to meet the demands of modern facilities. This post explores the latest innovations, from advanced epoxy and polyurethane systems to specialized coatings designed for extreme conditions. We discuss trends like enhanced chemical resistance, improved slip safety, rapid curing times, and sustainable options. Stay ahead of the curve and discover how these advancements can optimize performance, durability, and maintenance in your industrial spaces.',
    publishDate: '2025-11-07',
    category:'Flooring Solutions',
    coverImage: '/images/InnovationsinIndustrialFlooringWhatsNew.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '5',
    title: 'Maximizing Efficiency with Material Coverage Calculators',
    content: 'In construction, accurate material estimation is key to controlling costs and minimizing waste. Our material coverage calculator is a powerful tool designed to streamline your project planning. This article explains how to leverage its features, from inputting project dimensions to selecting specific products and accounting for wastage. Learn how our calculator provides precise material quantities, helping you avoid over-ordering or shortages, saving time, and improving overall project efficiency. It\'s an indispensable resource for every contractor and DIY enthusiast.',
    publishDate: '2025-10-19',
    category:'Resources',
    coverImage: '/images/MaximizingEfficiencywithMaterialCoverageCalculators.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '6',
    title: 'Innovations in Industrial Flooring: What\'s New?',
    content: 'As the construction industry moves towards more sustainable practices, the role of eco-friendly admixtures becomes increasingly vital. This article explores how modern admixtures can significantly reduce the environmental impact of concrete and mortar. We discuss innovations that enhance material performance while minimizing energy consumption, reducing waste, and utilizing recycled content. Discover how our green admixture solutions contribute to LEED certification, improve durability, and support a healthier planet without compromising structural integrity.',
    publishDate: '2025-09-06',
    category:'Admixtures',
    coverImage: '/images/InnovationsinEcoFriendlyAdmixtures.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '7',
    title: 'Achieving Flawless Finishes with Decorative Surface Coatings',
    content: 'Decorative surface coatings offer an incredible way to transform ordinary surfaces into stunning architectural features. This comprehensive guide provides expert tips and techniques for applying various decorative coatings, including textured paints, metallic finishes, and specialized plasters.\n\nSurface Preparation: The Foundation of Excellence\n\nThe key to achieving flawless decorative finishes lies in meticulous surface preparation. Begin by thoroughly cleaning the substrate, removing all dust, dirt, grease, and loose materials. For previously painted surfaces, assess the existing coating\'s condition and sand or strip if necessary. Fill any cracks, holes, or imperfections with appropriate fillers, ensuring a smooth, uniform base.\n\nPrimer selection is crucial for optimal adhesion and finish quality. Choose primers specifically designed for your substrate type—whether concrete, drywall, metal, or wood. Allow adequate drying time between preparation steps, as rushing this phase often leads to finish failures later.\n\nTextured Decorative Coatings\n\nTextured coatings add depth and visual interest to any surface. Popular options include:\n\n• Stipple textures: Created using specialized rollers or brushes to achieve consistent patterns\n• Knockdown finishes: Applied thick and then flattened with a trowel for a subtle, organic appearance\n• Orange peel textures: Sprayed applications that create a citrus-like surface texture\n• Venetian plaster: Multi-layer applications that create marble-like depth and richness\n\nApplication techniques vary by product, but consistency in pressure, direction, and timing is essential for uniform results.\n\nMetallic Finishes: Creating Luxurious Effects\n\nMetallic decorative coatings can transform spaces with sophisticated, reflective surfaces. These specialized coatings contain metallic particles that create depth and movement as light hits the surface from different angles.\n\nFor best results with metallic finishes:\n• Apply base coats evenly to prevent streaking\n• Use cross-hatching techniques for consistent coverage\n• Work in manageable sections to maintain wet edges\n• Consider multiple thin coats rather than single thick applications\n• Protect finished surfaces with appropriate topcoats for durability\n\nSpecialized Plaster Systems\n\nDecorative plasters offer unlimited creative possibilities, from smooth, polished surfaces to heavily textured architectural elements. Modern plaster systems may include:\n\n• Acrylic-based plasters for excellent weather resistance\n• Lime-based systems for traditional, breathable finishes\n• Polymer-modified plasters combining durability with workability\n• Aggregate-containing plasters for unique textural effects\n\nCommon Application Challenges and Solutions\n\nFlash marks and uneven sheen often result from inconsistent application techniques or varying dry times. Maintain consistent pressure and overlap patterns while keeping wet edges active.\n\nColor variations can occur when mixing multiple batches. Pre-mix sufficient material for entire sections and box multiple containers to ensure color consistency.\n\nAdhesion failures typically stem from inadequate surface preparation or incompatible primer selection. Always follow manufacturer specifications for substrate preparation and primer compatibility.\n\nWeather conditions significantly impact application success. Avoid applying decorative coatings in direct sunlight, extreme temperatures, or high humidity conditions that can affect drying and curing.\n\nTools and Equipment\n\nProfessional-grade tools make significant differences in finish quality:\n• High-quality brushes and rollers designed for decorative applications\n• Specialized trowels and float tools for plaster work\n• Spray equipment for large-area applications\n• Color-mixing tools for custom tinting\n• Protective equipment including respirators and ventilation systems\n\nMaintenance and Longevity\n\nProper maintenance extends the life and appearance of decorative finishes. Establish cleaning protocols appropriate for each coating type, avoiding harsh chemicals that might damage specialized surfaces. Regular inspections help identify potential issues before they become major problems.\n\nFor exterior applications, consider UV protection and weather resistance when selecting products. Some decorative coatings may require periodic reapplication of protective topcoats to maintain their appearance and performance.\n\nWhether creating striking interior accent walls or impressive exterior facades, our comprehensive range of decorative coatings provides endless possibilities for aesthetic enhancement and surface protection. With proper preparation, application techniques, and quality materials, achieving professional-level decorative finishes is within reach of any project.',
    publishDate: '2025-08-15',   
    category:'Decorative Surface Finish',
    coverImage: '/images/achievingflawlessfinisheswithdecorativesurfacecoatings.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '8',
    title: 'Understanding Mortar Types: A Comprehensive Guide',
    content: 'Mortar is a fundamental component in masonry construction, but not all mortars are created equal. This comprehensive guide breaks down the different types of mortar—Type M, S, N, O, and K—explaining their unique properties, strength ratings, and ideal applications.\n\nType M Mortar\n\nType M mortar is the strongest mortar mix with a compressive strength of at least 2,500 psi. It contains a high proportion of Portland cement, making it ideal for below-grade applications, foundations, retaining walls, and areas subject to high loads or severe weather conditions. The high strength comes at the cost of workability, making it less flexible than other types.\n\nType S Mortar\n\nType S mortar offers high tensile bond strength and is designed for structural applications where the masonry must withstand normal to high lateral forces. With a minimum compressive strength of 1,800 psi, it\'s perfect for exterior walls, chimneys, manholes, and other structural applications at or below grade. It provides excellent adhesion and moderate flexibility.\n\nType N Mortar\n\nType N mortar is the most commonly used mortar in residential construction. With a compressive strength of at least 750 psi, it offers good workability and weather resistance. This versatile mortar is ideal for general exterior construction above grade, including exterior walls, parapets, and areas exposed to severe weather. It balances strength, workability, and durability.\n\nType O Mortar\n\nType O mortar has a lower compressive strength (minimum 350 psi) but excellent workability. It\'s primarily used for non-load bearing interior walls, pointing work, and historic restoration projects where the mortar must match the original material\'s properties. Its high lime content makes it more flexible and breathable than stronger mortars.\n\nType K Mortar\n\nType K mortar is the weakest but most flexible mortar type, with a compressive strength of just 75 psi. It\'s specifically designed for historic preservation and restoration work where maintaining the building\'s original characteristics is crucial. Its high lime content allows for movement and prevents damage to historic masonry units.\n\nMixing Ratios and Best Practices\n\nProper mixing ratios are crucial for achieving the desired mortar properties. Type M typically uses 1 part Portland cement, 1/4 part lime, and 3 to 3.75 parts sand. Type S uses 1 part Portland cement, 1/2 part lime, and 4.5 parts sand. Proper water content, thorough mixing, and appropriate curing are essential for optimal performance.\n\nApplication Tips\n\nAlways match mortar strength to the masonry units being used. Softer mortars should be used with soft bricks or stones to prevent cracking. Consider environmental factors such as freeze-thaw cycles, chemical exposure, and moisture levels when selecting mortar type. Proper joint tooling and curing significantly impact the final performance and appearance of the masonry work.',
    publishDate: '2025-07-03',
    category:'Mortar',
    coverImage: '/images/understandingmortartypes.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '9',
    title: 'Concrete Admixtures',
    content: 'Admixtures that reduce water content are intended to provide a particular concrete strength at a significantly lower water-to-cement ratio than usual. A reduced cement percentage will lead to lower CO2 emissions and an overall lower energy usage rate per batch of concrete produced, which is one reason you might wish to use less cement in your concrete mix.\n\nSuperplasticisers\n\nThe main purpose of superplasticizers is to create flowing concrete. Concrete that flows is a very workable variety without compromising strength. It is frequently applied to regions with closely spaced reinforced steel and thin section placements.\n\nAccelerating admixtures\n\nAccelerating admixtures are used to reduce the time it takes for the concrete to fully set or to increase the rate at which the concrete strengthens over time. The most obvious use case for this would be if a project was on a very tight timeline or if the location was at risk from increasingly unpredictable weather. Calcium chloride is a necessary ingredient in the majority of accelerating admixtures.\n\nShrinkage reducing admixtures\n\nAdmixtures that reduce shrinkage are self-explanatory in that they lessen shrinkage that happens during drying. These kinds of admixtures are typically utilized in projects where shrinkage cracking may eventually cause structural issues.\n\nIt\'s important to remember, though, that shrinkage-reducing admixtures can sometimes slow down the process of strength development in both the early and late phases of concrete curing.\n\nAir entrainment admixtures\n\nThese sorts of admixtures are used to make concrete more resistant to freeze-thaw cycles. Thus, as you may guess, air-entrained concrete is especially useful in locations where there is a greater likelihood of freeze-thaw cycles.\n\nAir entrained concrete does, however, have a few additional advantages, such as a high level of workability and durability, so if you\'re searching for a versatile concrete, this might be it!\n\nSet retarding admixtures\n\nAdmixtures that are set-retarding are exactly the opposite of those that are accelerating. In fact, they are employed to postpone the chemical reaction that initiates the setting process. Delaying this process can be beneficial since it counteracts the effect of increased outside temperatures, which can hasten the curing process. Therefore, you may need to investigate set retarding additives if your project falls during an exceptionally hot summer.\n\nWe are Concreed, the preferred provider of concrete in India. We can obtain the precise kind of concrete you require for your ongoing project from anywhere in the capital, and we\'ll make sure it arrives on schedule and with minimum of hassle. Give us a call now to learn more about our concrete and the various admixtures we may use to create the ideal mix.',
    publishDate: '2025-06-20',
    category:'Admixtures',
    coverImage: '/images/aboutconcreedadmixtures.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '10',
    title: 'Construction Chemicals',
    content: 'Construction chemicals have become essential components in the chemical industry, used in conjunction with concrete, cement, and other construction materials. These chemicals play a crucial role in global infrastructure development, being employed in various projects ranging from industrial and residential to infrastructure and commercial sectors. Learn about different types including admixtures, adhesives, waterproofing compounds, and surface treatments.',
    publishDate: '2025-05-11',
    category:'Admixtures',
    coverImage: '/images/constructionchemicals.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '11',
    title: 'Tile Adhesives',
    content: 'Flooring plays a major role in enhancing the beauty and overall attractiveness of any space in a house. Among all flooring options, tiles are the most commonly used because they add character, durability, and style to interiors. Learn about tile adhesives, their advantages, and how they help secure tiles on walls, floors, and various surfaces effectively without shrinking or cracking.',
    publishDate: '2025-04-29',
    category:'Tile & Stone Adhesive and Grout',
    coverImage: '/images/ChoosingtheRightTileAdhesive.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '12',
    title: 'Waterproofing Systems',
    content: 'Waterproofing is a system designed to arrest water from entering your house and protect the structure from moisture-related damage. Learn about the importance of proper waterproofing, common issues faced by buildings, and how CONCREED has developed comprehensive processes for reliable structural protection systems.',
    publishDate: '2025-03-18',
    category:'Waterproofing Solutions',
    coverImage: '/images/TheUltimateGuidetoWaterproofing.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '13',
    title: 'Waterproof Putty',
    content: 'Waterproof putty is a white cement-based, water-resistant product with high plasticity that is widely used as a sealer and filler in home construction and repair work. Learn about application methods, advantages, and how waterproof putty protects exterior surfaces from damage, corrosion, and weather-related deterioration.',
    publishDate: '2025-02-02',
    category:'Waterproofing Solutions',
    coverImage: '/images/TheUltimateGuideOfPutty.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '14',
    title: 'Waterproofing Bathrooms',
    content: 'The bathroom is one of the most important areas in any house that requires proper waterproofing. It is continuously exposed to water, moisture, and water vapour, making the space persistently damp. Learn about the importance of professional bathroom waterproofing, health risks of moisture build-up, and how to create a healthy, safe, and long-lasting living environment.',
    publishDate: '2025-01-15',
    category:'Waterproofing Solutions',
    coverImage: '/images/TheUltimateGuidetoBathrooms.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '15',
    title: 'Home Waterproofing',
    content: 'Prevention is better than cure – Build your new home waterproof. While planning and building an ideal house, waterproofing is often overlooked, even though it plays a critical role in long-term structural safety. Learn about the importance of preventive waterproofing, protecting your investment, and creating a strong foundation for your dream home.',
      publishDate: '2025-01-03',
      category:'Waterproofing Solutions',
    coverImage: '/images/TheUltimateGuidetoHome.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
];


export default function BlogDetailPage() {
  const params = useParams();
  const id = typeof params.id === 'string' ? params.id : Array.isArray(params.id) ? params.id[0] : undefined;
  const [blog, setBlog] = useState<BlogPosts | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      setTimeout(() => {
        const found = mockBlogPosts.find(b => b._id === id);
        setBlog(found || null);
        setIsLoading(false);
      }, 300);
    }
  }, [id]);

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    try {
      return format(new Date(date), 'MMMM dd, yyyy');
    } catch {
      return '';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      
      <div className="w-full max-w-400 mx-auto px-8 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Link href="/blogs">
          <Button 
            variant="outline"
            className="mb-12 border-2 border-[#e4b725] text-[#374151] bg-transparent hover:bg-[#e4b725]/5 hover:text-[#374151] font-paragraph transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <div className="min-h-150">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Spinner />
            </div>
          ) : !blog ? (
            <div className="text-center py-20">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.875rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 700 }}>
                Article Not Found
              </h2>
              <p className="font-paragraph text-base text-foreground/60 mb-8" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                The article you're looking for doesn't exist.
              </p>
              <Link href="/blogs">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View All Articles
                </Button>
              </Link>
            </div>
          ) : (
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              {/* Article Header */}
              <header className="mb-12">
                {blog.category && (
                  <div className="inline-block px-4 py-2 bg-[#FFFFFF]/5 rounded-sm mb-6 border border-[#E0E0E0]">
                    <span className="font-paragraph text-sm text-[#e4b725] font-medium" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 500 }}>
                      {blog.category}
                    </span>
                  </div>
                )}

                <h1 className="font-heading text-5xl lg:text-7xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
                  {blog.title}
                </h1>
                <div className="w-12 h-1 bg-[#e4b725] mb-6" />
                
                <div className="flex items-center gap-6 text-foreground/60">
                  {blog.publishDate && (
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-[#333333]/60" strokeWidth={1.5} />
                      <span className="font-paragraph text-base" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400, color: '#333333' }}>
                        {formatDate(blog.publishDate)}
                      </span>
                    </div>
                  )}
                  {blog.author && (
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-[#333333]/60" strokeWidth={1.5} />
                      <span className="font-paragraph text-base" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400, color: '#333333' }}>
                        {blog.author}
                      </span>
                    </div>
                  )}
                </div>
              </header>

              {/* Featured Image */}
              {blog.coverImage && (
                <div className="aspect-video rounded-sm overflow-hidden mb-12">
                  <Image 
                    src={blog.coverImage}
                    alt={blog.title || 'Blog post cover'}
                    className="w-full h-full object-cover"
                    width={1200}
                    height={600}
                  />
                </div>
              )}

              {/* Article Content */}
              <div className="prose prose-lg max-w-none">
                <div className="font-paragraph text-lg text-foreground/80 leading-relaxed whitespace-pre-line" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                  {blog.content}
                </div>
              </div>

              {/* Article Footer */}
              <footer className="mt-16 pt-12 border-t border-[#E0E0E0]">
                <Link href="/blogs">
                  <Button 
                    variant="outline"
                    className="border-2 border-[#e4b725] text-[#374151] bg-transparent hover:bg-[#e4b725]/5 hover:text-[#374151] font-paragraph transition-all duration-300"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Articles
                  </Button>
                </Link>
              </footer>
            </motion.article>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
