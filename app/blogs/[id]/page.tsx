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
    publishDate: '2026-01-01',
    category:'Waterproofing Solutions',
    coverImage: '/images/TheUltimateGuidetoWaterproofingYourBasement.png',
    _createdDate: new Date('2026-01-01'),
    _updatedDate: new Date('2026-01-02'),
  },
  {
    _id: '2',
    title: 'Choosing the Right Tile Adhesive for Every Project',
    content: 'Selecting the correct tile adhesive is paramount for a successful and long-lasting tiling installation. With a myriad of options available, understanding the properties of different adhesives—such as cementitious, epoxy, and dispersion adhesives—is key. This article delves into factors like substrate type, tile material, environmental conditions, and traffic load to help you make an informed decision. Discover how our specialized tile adhesives ensure superior bond strength and durability for both residential and commercial applications.',
    publishDate: '2026-01-10',
    category:'Tile & Stone Adhesive and Grout',
    coverImage: '/images/ChoosingtheRightTileAdhesiveforEveryProject.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '3',
    title: '5 Common Mistakes in Concrete Repair and How to Avoid Them',
    content: 'Concrete repair can be a complex task, and even experienced professionals can make mistakes that compromise the repair\'s effectiveness and longevity. This article identifies five common pitfalls, including improper surface preparation, incorrect material selection, inadequate curing, and ignoring underlying issues. We provide practical advice and best practices to help you avoid these errors, ensuring your concrete repairs are durable, aesthetically pleasing, and structurally sound. Learn how our high-performance concrete repair solutions simplify the process.',
    publishDate: '2026-01-10',
    category:'Concrete Repair Solutions',
    coverImage: '/images/CrackSealEpoxyFiller.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '4',
    title: 'Innovations in Industrial Flooring: What\'s New?',
    content: 'The world of industrial flooring is constantly evolving, with new technologies and materials emerging to meet the demands of modern facilities. This post explores the latest innovations, from advanced epoxy and polyurethane systems to specialized coatings designed for extreme conditions. We discuss trends like enhanced chemical resistance, improved slip safety, rapid curing times, and sustainable options. Stay ahead of the curve and discover how these advancements can optimize performance, durability, and maintenance in your industrial spaces.',
    publishDate: '2026-01-10',
    category:'Flooring Solutions',
    coverImage: '/images/InnovationsinIndustrialFlooringWhatsNew.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '5',
    title: 'Maximizing Efficiency with Material Coverage Calculators',
    content: 'In construction, accurate material estimation is key to controlling costs and minimizing waste. Our material coverage calculator is a powerful tool designed to streamline your project planning. This article explains how to leverage its features, from inputting project dimensions to selecting specific products and accounting for wastage. Learn how our calculator provides precise material quantities, helping you avoid over-ordering or shortages, saving time, and improving overall project efficiency. It\'s an indispensable resource for every contractor and DIY enthusiast.',
    publishDate: '2026-01-10',
    category:'Resources',
    coverImage: '/images/MaximizingEfficiencywithMaterialCoverageCalculators.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '6',
    title: 'Innovations in Industrial Flooring: What\'s New?',
    content: 'As the construction industry moves towards more sustainable practices, the role of eco-friendly admixtures becomes increasingly vital. This article explores how modern admixtures can significantly reduce the environmental impact of concrete and mortar. We discuss innovations that enhance material performance while minimizing energy consumption, reducing waste, and utilizing recycled content. Discover how our green admixture solutions contribute to LEED certification, improve durability, and support a healthier planet without compromising structural integrity.',
    publishDate: '2026-01-10',
    category:'Admixtures',
    coverImage: '/images/InnovationsinEcoFriendlyAdmixtures.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '7',
    title: 'Achieving Flawless Finishes with Decorative Surface Coatings',
    content: 'Decorative surface coatings offer an incredible way to transform ordinary surfaces into stunning architectural features. This guide provides tips and techniques for applying various decorative coatings, including textured paints, metallic finishes, and specialized plasters. Learn about proper surface preparation, application methods, and common challenges to achieve a flawless and long-lasting finish. Whether for interior accent walls or exterior facades, our range of decorative coatings provides endless possibilities for aesthetic enhancement and protection.',
    publishDate: '2026-01-10',
    category:'Decorative Surface Finish',
    coverImage: '/images/AchievingFlawlessFinisheswithDecorativeSurfaceCoatings.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '8',
    title: 'Understanding Mortar Types: A Comprehensive Guide',
    content: 'Mortar is a fundamental component in masonry construction, but not all mortars are created equal. This comprehensive guide breaks down the different types of mortar—Type M, S, N, O, and K—explaining their unique properties, strength ratings, and ideal applications. Learn how to select the right mortar for various projects, from load-bearing walls to historical restoration, ensuring optimal bond strength, durability, and weather resistance. We also cover mixing ratios and best practices for application to achieve superior masonry work.',
    publishDate: '2026-01-10',
    category:'Mortar',
    coverImage: '/images/UnderstandingMortarTypes.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '9',
    title: 'Concrete Admixtures',
    content: 'Admixtures that reduce water content are intended to provide a particular concrete strength at a significantly lower water-to-cement ratio than usual. A reduced cement percentage will lead to lower CO2 emissions and an overall lower energy usage rate per batch of concrete produced, which is one reason you might wish to use less cement in your concrete mix.\n\nSuperplasticisers\n\nThe main purpose of superplasticizers is to create flowing concrete. Concrete that flows is a very workable variety without compromising strength. It is frequently applied to regions with closely spaced reinforced steel and thin section placements.\n\nAccelerating admixtures\n\nAccelerating admixtures are used to reduce the time it takes for the concrete to fully set or to increase the rate at which the concrete strengthens over time. The most obvious use case for this would be if a project was on a very tight timeline or if the location was at risk from increasingly unpredictable weather. Calcium chloride is a necessary ingredient in the majority of accelerating admixtures.\n\nShrinkage reducing admixtures\n\nAdmixtures that reduce shrinkage are self-explanatory in that they lessen shrinkage that happens during drying. These kinds of admixtures are typically utilized in projects where shrinkage cracking may eventually cause structural issues.\n\nIt\'s important to remember, though, that shrinkage-reducing admixtures can sometimes slow down the process of strength development in both the early and late phases of concrete curing.\n\nAir entrainment admixtures\n\nThese sorts of admixtures are used to make concrete more resistant to freeze-thaw cycles. Thus, as you may guess, air-entrained concrete is especially useful in locations where there is a greater likelihood of freeze-thaw cycles.\n\nAir entrained concrete does, however, have a few additional advantages, such as a high level of workability and durability, so if you\'re searching for a versatile concrete, this might be it!\n\nSet retarding admixtures\n\nAdmixtures that are set-retarding are exactly the opposite of those that are accelerating. In fact, they are employed to postpone the chemical reaction that initiates the setting process. Delaying this process can be beneficial since it counteracts the effect of increased outside temperatures, which can hasten the curing process. Therefore, you may need to investigate set retarding additives if your project falls during an exceptionally hot summer.\n\nWe are Concreed, the preferred provider of concrete in India. We can obtain the precise kind of concrete you require for your ongoing project from anywhere in the capital, and we\'ll make sure it arrives on schedule and with minimum of hassle. Give us a call now to learn more about our concrete and the various admixtures we may use to create the ideal mix.',
    publishDate: '2026-01-10',
    category:'Admixtures',
    coverImage: '/images/aboutconcreedadmixtures.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '10',
    title: 'Construction Chemicals',
    content: 'Construction chemicals have become essential components in the chemical industry, used in conjunction with concrete, cement, and other construction materials. These chemicals play a crucial role in global infrastructure development, being employed in various projects ranging from industrial and residential to infrastructure and commercial sectors. High-quality chemicals are a major factor in improving construction outcomes.\n\nTypes of construction chemicals:\n\n• Admixtures for concrete and mortar\n• Adhesives and sealants\n• Waterproofing compound\n• Hardeners and floor toppings\n• Surface treatments and protective coatings\n\nThese compounds have several advantages, including less abrasion, stronger bonds, and dustproofing, extending the life of structures, better appearance, and protection against climate-related deterioration.\n\nEmerging trends in the construction chemical sector include the use of sustainable products and technological advancements, a rise in demand for construction chemicals in India as a result of new building and renovation projects, and increased investment in research and development in Asian nations.\n\nApplications for construction chemicals:\n\nDecrease in abrasions\nStrengthening of the bonds\nProlongs the life of the structures\nEnhanced the way the building felt and looked\nExtends the life of the structures\nImproving a structure\'s durability\nShielding structures from outside threats\nMinimizing the amount of cement and water that are utilized for constructing\nEliminate any substantial structural damage caused by the country\'s weather\n\nCONCREED SOLUTIONS PVT. LTD. is a leading manufacturer and supplier of construction chemicals. Our goods uphold strict quality guidelines, guaranteeing uniqueness and dependability. Our goal is to supply the construction sector with cutting-edge, premium materials at affordable costs while maintaining a laser-like emphasis on client satisfaction. Our committed customer service team is here to help with any problems you might encounter.',
    publishDate: '2026-01-10',
    category:'Admixtures',
    coverImage: '/images/constructionchemicals.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '11',
    title: 'Tile Adhesives',
    content: 'Flooring plays a major role in enhancing the beauty and overall attractiveness of any space in a house. Among all flooring options, tiles are the most commonly used because they add character, durability, and style to interiors. To fix these tiles firmly in place, tile adhesive is used. Tile adhesive is a special type of glue designed specifically for bonding tiles to different surfaces.\n\nTile adhesives are made from a combination of materials such as epoxy, polymer, cement, and other compounds. These materials help secure tiles on walls, floors, and various surfaces effectively. One of the major advantages of tile adhesives is that they do not shrink or crack, even with changes in moisture levels and temperature variations, ensuring long-lasting performance.\n\nAdvantages of Using Tile Adhesives\n\nTile adhesives are widely used for attaching tiles to walls and wall cladding. Non-skid tile adhesives are especially useful in wall cladding applications, as they prevent tiles from slipping during installation. Using these adhesives makes it possible to fix ceramic and vitrified tiles efficiently and securely.\n\nFor fixing glass tiles and mosaics, high-strength tile adhesives are preferred. These adhesives are commonly used in submerged areas such as bathrooms and swimming pools, where constant exposure to water is expected. They are usually available in white powder form because white cement is added, which helps maintain the appearance of glass and mosaic tiles.\n\nIn flooring applications, polymer-modified cement-based tile adhesives are commonly used. These adhesives provide higher strength compared to traditional cement and sand mortar. Various polymers are added to enhance their properties, such as acrylic for fixing small-sized tiles, latex for outdoor applications, and epoxy for both indoor and outdoor use due to its resistance to water, oil, alkalis, and other substances.\n\nOverall, tile adhesives help reduce several common problems such as water seepage, tile breakage, stains, and other related issues, making them a reliable and efficient solution for modern tile installation.',
    publishDate: '2026-01-10',
    category:'Tile & Stone Adhesive and Grout',
    coverImage: '/images/ChoosingtheRightTileAdhesive.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '12',
    title: 'Waterproofing System',
    content: 'Waterproofing is a system designed to arrest water from entering your house and protect the structure from moisture-related damage. Maintaining the dryness of a property is essential for long-term protection, as it helps lower interior humidity levels and prevents damage to goods stored inside the home. Choosing proper waterproofing significantly increases the overall resilience and durability of the structure.\n\nMost high-rise and low-rise buildings commonly face issues such as leaking terraces, widespread water seepage on exterior walls, and similar problems occurring on the inner sides of these walls. These issues, if left unaddressed, can gradually weaken the structure and reduce its lifespan.\n\nUnfortunately, the importance of waterproofing structures is often neglected. In many cases, organizations without the required expertise are assigned this responsibility. These tasks are frequently subcontracted to contractors with intermediate skill levels who are unable to apply modern, advanced waterproofing technologies effectively.\n\nNearly 80% of the waterproofing standards mentioned in tenders are simple copy-and-paste practices. Due to extremely low pricing, labourers or agencies lacking proper knowledge and experience in systematic waterproofing are hired, resulting in poor execution and long-term failures.\n\nImproper installation or failure of waterproofing systems poses a serious risk to buildings. Such failures can lead to expensive repair work and significant structural weakening, making safeguarding buildings through proper waterproofing a critical necessity.\n\nTo provide a reliable and long-lasting structural protection system while minimizing environmental impact, CONCREED has developed its own comprehensive process. This process involves thorough research, assessment, design, and managed internal execution of waterproofing systems to ensure effective and durable results.',
    publishDate: '2026-01-10',
    author: 'Dr. Elena Petrova',
    category:'Waterproofing Solutions',
    coverImage: '/images/TheUltimateGuidetoWaterproofing.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '13',
    title: 'Waterproof Putty',
    content: 'Waterproof putty is a white cement-based, water-resistant product with high plasticity that is widely used as a sealer and filler in home construction and repair work. Due to its superior structure, which offers excellent strength and adhesion, waterproof putty protects exterior surfaces from damage, corrosion, and weather-related deterioration.\n\nA waterproof exterior surface provides enhanced protection against mold growth, stains, and wall cracks. Putty gives walls a smooth and level finish, creating an ideal base for painting while adding shine and smoothness to the surface. Because of these properties, waterproof putty can be used on both interior and exterior walls.\n\nHow to apply waterproof putty\n\nThe first step in applying waterproof putty is preparing the surface. Use a paint scraper or coarse sandpaper on old walls to remove loose plaster, primer, or paint flakes. Brush the wall thoroughly to eliminate remaining dust and particles. Finally, wipe the surface with a clean rag or sponge and slightly moisten it to make the wall ready for putty application.\n\nNext comes mixing the putty and patching imperfections. Waterproof putty is mixed with approximately 5–35% water to form a smooth, creamy paste suitable for application. The first layer of putty is applied on the prepared wall surface. After the first coat dries, loose particles are removed, and a second coat is applied to achieve a smooth and uniform finish. A final top coat can then be applied if required.\n\nAdvantages of waterproof putty\n\nThere are several advantages to using waterproof putty on exterior surfaces. It resists moisture and acts as a protective barrier against dampness that can lead to structural damage. Waterproof putty also helps prevent water leakage by sealing cracks and gaps on wall surfaces, especially during rainy and monsoon seasons.\n\nIn addition, waterproof putty safeguards walls from stains and discoloration caused by water seepage. It increases the longevity of walls by reducing the risk of cracks, peeling, and surface damage. Putty enhances wall durability, provides an even and shiny finish, and helps maintain the paint for a longer period. It also functions as a pre-layer before painting, giving the surface a refined and finished appearance.\n\nConclusion\n\nPutty is an essential requirement for any building as it ensures durability, longevity, and a smooth wall surface. Waterproof putty offers resistance against moisture and acts as a strong base layer before paint application. To avoid ceiling leakage, wall stains, and dampness-related issues, using waterproof putty is a reliable and effective solution.',
    publishDate: '2026-01-10',
    author: 'Dr. Elena Petrova',
    category:'Waterproofing Solutions',
    coverImage: '/images/TheUltimateGuideOfPutty.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '14',
    title: 'Waterproofing Bathrooms',
    content: 'The bathroom is one of the most important areas in any house that requires proper waterproofing. It is continuously exposed to water, moisture, and water vapour, which makes the space persistently damp. Over time, this constant exposure can damage not only surfaces but also cabinets, fittings, and other accessories present in the bathroom.\n\nDue to the presence of water vapour, bathroom surfaces tend to deteriorate faster if not protected properly. This is why adequate ventilation and effective waterproofing are essential to keep the bathroom dry and hygienic. High-quality waterproofing plays a vital role in bathrooms, where professional attention must be given to all surfaces, including walls, floors, and ceilings.\n\nMoisture build-up in bathrooms must be prevented at all costs, and this should be considered during both the design and construction stages of a building. Waterproofing should ideally be implemented during the construction process itself and must be treated as a top priority from the beginning to avoid future complications.\n\nWet and moist environments provide an ideal breeding ground for germs and pathogenic bacteria. These microorganisms can lead to several health issues, including allergies and respiratory problems such as bronchitis, asthma, and respiratory tract infections. Allowing homes to become such unhealthy environments can negatively impact everyone\'s health and reduce overall productivity and efficiency.\n\nIf bathroom leaks are not addressed with a waterproofing solution that offers long-term protection, they will continue to cause problems in the home. Therefore, investing in proper bathroom waterproofing is essential to create a healthy, safe, and long-lasting living environment.',
    publishDate: '2026-01-10',
    author: 'Dr. Elena Petrova',
    category:'Waterproofing Solutions',
    coverImage: '/images/TheUltimateGuidetoBathrooms.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '15',
    title: 'Home Waterproofing',
    content: 'Prevention is better than cure – Build your new home waterproof\n\nBefore it is too late, make sure your dream home is completely waterproof. While planning and building an ideal house, waterproofing is often overlooked, even though it plays a critical role in long-term structural safety. Many homeowners underestimate its importance, but waterproofing is essential and cannot be ignored.\n\nEnsuring that your home is waterproof is not just about preventing water from entering the building; it is about creating a strong and durable foundation. Ignoring waterproofing at the initial stage can lead to unnecessary and expensive damage, affecting not only the interiors of your home but also furniture, appliances, and other valuable belongings.\n\nTaking preventive action before problems arise is always the smarter choice. Whether it is safeguarding the health of your family or preserving the interior design and overall aesthetics of your home, waterproofing is a crucial step. Waterproofing your home at the right time helps protect it from water intrusion and the various issues associated with dampness and leakage.\n\nReasons to Waterproof Your Home\n\nWater leakage can cause serious damage over time. Problems such as damaged roofs, peeling paint, cracked plaster, and damp walls are common results of poor waterproofing. When water seeps into walls and terraces, it damages paint and plaster coatings, leading to discoloration and surface deterioration. This is why waterproofing walls, terraces, and other vulnerable areas is a wise and necessary decision for any new home.',
    publishDate: '2026-01-10',
    author: 'Dr. Elena Petrova',
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
