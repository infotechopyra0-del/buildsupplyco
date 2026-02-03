"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
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
    content: 'In construction, accurate material estimation is the cornerstone of successful project management, directly impacting costs, timeline, and waste reduction. Our advanced material coverage calculator represents a revolutionary tool designed to streamline project planning and eliminate the guesswork from material ordering.\n\nThe Challenge of Accurate Material Estimation\n\nMaterial estimation has historically been one of the most challenging aspects of construction project management. Traditional methods often rely on rough calculations, rule-of-thumb estimates, and experience-based guesswork, leading to significant variations in accuracy. Over-ordering results in unnecessary costs and storage issues, while under-ordering causes project delays, emergency purchases at premium prices, and frustrated stakeholders.\n\nThe financial impact of poor material estimation extends beyond immediate costs. Excess materials tie up working capital, require storage space, and may deteriorate before use. Conversely, material shortages can halt work, delay project completion, and damage professional relationships with clients and subcontractors.\n\nAdvanced Calculator Features and Functionality\n\nProject Dimension Input System\n\nOur material coverage calculator employs sophisticated algorithms to process complex project geometries. Users can input detailed measurements including length, width, height, and irregular shapes using our intuitive interface. The system automatically calculates surface areas, volumes, and coverage requirements for various applications.\n\nFor complex projects, the calculator supports multi-room calculations, allowing users to input different areas with varying requirements and consolidate material needs into comprehensive shopping lists. This feature proves invaluable for large residential projects or commercial developments with diverse material requirements.\n\nProduct-Specific Calculations\n\nDifferent construction materials have unique coverage characteristics, and our calculator accounts for these variations with precision. For waterproofing membranes, the system considers overlap requirements, substrate porosity, and application thickness. Tile adhesive calculations factor in tile size, substrate type, and environmental conditions that affect coverage rates.\n\nConcrete calculations include mix design considerations, waste factors, and curing requirements. The system provides detailed breakdowns of cement, aggregates, and admixture quantities while accounting for over-ordering safety margins and delivery logistics.\n\nWastage Factor Integration\n\nProfessional contractors understand that material wastage is inevitable in construction projects. Our calculator incorporates intelligent wastage factors based on material type, application method, and project complexity. Standard wastage allowances range from 5-10% for simple applications to 15-20% for complex installations or first-time users.\n\nThe system allows users to adjust wastage factors based on their experience level, project complexity, and site conditions. For example, cutting tiles around irregular shapes or working with fragmented surfaces typically requires higher wastage allowances than straightforward installations.\n\nCost Optimization and Budget Management\n\nMaterial Quantity Optimization\n\nThe calculator\'s algorithms optimize material quantities to minimize waste while ensuring adequate supply. For products sold in specific package sizes, the system calculates the most efficient purchasing combinations, often suggesting bulk purchases that reduce per-unit costs while maintaining reasonable inventory levels.\n\nBudget forecasting capabilities help contractors and DIY enthusiasts plan project finances effectively. The system provides detailed cost breakdowns, including material costs, estimated wastage expenses, and delivery charges, enabling accurate project budgeting from the planning stage.\n\nSupplier Integration and Pricing\n\nAdvanced features include real-time pricing from multiple suppliers, allowing users to compare costs and identify the most economical purchasing options. The system can suggest alternative products with similar performance characteristics but better pricing, helping users optimize their material budgets without compromising quality.\n\nApplication-Specific Guidance\n\nWaterproofing Applications\n\nFor waterproofing projects, the calculator provides specialized guidance on primer requirements, membrane thickness, and overlap specifications. Users receive detailed application schedules that account for curing times, weather conditions, and multi-coat systems. The system also calculates quantities for associated materials like primers, sealants, and protective coatings.\n\nTiling and Flooring Projects\n\nTile installation calculations consider substrate preparation materials, adhesive coverage rates, grout requirements, and finishing products. The system accounts for tile size, joint width, and substrate conditions to provide comprehensive material lists that include everything from surface preparation to final cleaning products.\n\nConcrete and Masonry Work\n\nConcrete calculations encompass ready-mix ordering, admixture requirements, and finishing materials. The system provides guidance on delivery scheduling, placement equipment needs, and curing compound quantities. For masonry projects, calculations include mortar mix ratios, joint requirements, and weather protection materials.\n\nDigital Integration and Mobile Accessibility\n\nCloud-Based Calculations\n\nOur calculator operates on cloud-based technology, ensuring users can access their calculations from any device, anywhere. Project data syncs automatically across platforms, allowing team members to collaborate effectively and maintain consistent information throughout the project lifecycle.\n\nMobile applications provide on-site access to calculations, enabling real-time adjustments based on field conditions. Contractors can modify quantities, update measurements, and generate new material lists directly from the job site, improving project flexibility and responsiveness.\n\nProject Documentation and Reporting\n\nThe system generates comprehensive reports that document calculation methodology, material specifications, and quantity justifications. These reports prove valuable for project documentation, client communications, and future reference. Export capabilities support various formats, including PDF reports, Excel spreadsheets, and direct integration with project management software.\n\nHistorical data tracking allows users to refine their estimation accuracy over time. The system learns from previous projects, suggesting improved wastage factors and highlighting areas where estimation accuracy can be enhanced.\n\nEnvironmental Impact and Sustainability\n\nWaste Reduction Benefits\n\nAccurate material estimation directly contributes to environmental sustainability by reducing construction waste. The construction industry generates significant waste, much of which stems from over-ordering and poor planning. Our calculator helps minimize this environmental impact by providing precise material quantities that reduce excess purchases.\n\nSustainable Material Options\n\nThe calculator database includes eco-friendly material alternatives, helping users make environmentally conscious choices without compromising project requirements. Users can compare traditional and sustainable options, including recycled content materials, low-emission products, and locally sourced alternatives.\n\nBest Practices for Maximum Efficiency\n\nPreparation and Planning\n\nSuccessful use of material coverage calculators begins with thorough project documentation. Accurate measurements, detailed drawings, and comprehensive material specifications ensure precise calculations. Users should account for site-specific factors such as access limitations, storage constraints, and delivery restrictions.\n\nRegular updates throughout the project lifecycle help maintain accuracy as plans evolve. The calculator\'s flexibility allows for easy modifications when design changes occur or field conditions differ from initial assumptions.\n\nTeam Coordination\n\nFor larger projects, establishing clear protocols for calculator use ensures consistency across team members. Standardized measurement procedures, consistent wastage factor applications, and regular calculation reviews help maintain accuracy and prevent miscommunications.\n\nFuture Developments and Technology Integration\n\nArtificial Intelligence and Machine Learning\n\nEmerging technologies promise even greater accuracy and functionality in material estimation tools. AI-powered systems can analyze historical project data to provide increasingly accurate predictions, while machine learning algorithms continuously improve estimation accuracy based on real-world feedback.\n\nBuilding Information Modeling (BIM) Integration\n\nFuture developments will include seamless integration with BIM software, allowing direct import of project geometries and automatic material quantity calculations. This integration eliminates manual measurement input while ensuring consistency between design models and material estimates.\n\nAugmented Reality Applications\n\nAdvanced visualization tools will enable users to overlay material requirements directly onto project sites using augmented reality technology. This capability will help visualize material placement, identify potential challenges, and verify calculation accuracy before material ordering.\n\nOur material coverage calculator represents an indispensable resource for construction professionals and DIY enthusiasts seeking to optimize project efficiency, control costs, and minimize waste. By providing precise material quantities, comprehensive planning tools, and intelligent optimization features, the calculator transforms material estimation from a source of uncertainty into a competitive advantage. Whether managing large commercial projects or tackling home improvement tasks, accurate material estimation is the foundation of successful construction outcomes.',
    publishDate: '2025-10-19',
    category:'Resources',
    coverImage: '/images/MaximizingEfficiencywithMaterialCoverageCalculators.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '6',
    title: 'Innovations in Industrial Flooring: What\'s New?',
    content: 'As the construction industry moves towards more sustainable practices, the role of eco-friendly admixtures becomes increasingly vital. This comprehensive article explores how modern admixtures can significantly reduce the environmental impact of concrete and mortar while maintaining superior performance standards.\n\nThe Environmental Challenge in Construction\n\nThe construction industry accounts for approximately 40% of global carbon emissions, with cement production alone responsible for 8% of worldwide CO2 emissions. Traditional construction practices have long prioritized performance and cost over environmental considerations, but this paradigm is rapidly shifting as sustainability becomes a critical factor in project planning and execution.\n\nEco-friendly admixtures represent a revolutionary approach to reducing construction\'s environmental footprint without compromising structural integrity or performance. These innovative solutions address multiple environmental concerns simultaneously: reducing energy consumption during production, minimizing waste generation, and utilizing recycled materials that would otherwise end up in landfills.\n\nTypes of Eco-Friendly Admixtures\n\nFly Ash-Based Admixtures\n\nFly ash, a byproduct of coal combustion in power plants, serves as an excellent pozzolanic admixture. When incorporated into concrete mixes, fly ash not only reduces the amount of Portland cement required but also enhances long-term strength and durability. This dual benefit significantly reduces CO2 emissions while improving concrete performance, particularly in terms of reduced permeability and increased resistance to chemical attack.\n\nSilica Fume Admixtures\n\nSilica fume, derived from silicon metal production, creates ultra-high-performance concrete with exceptional durability. This admixture fills microscopic voids in concrete, resulting in denser, stronger structures that require less maintenance over their lifecycle. The use of silica fume transforms industrial waste into a valuable construction material, exemplifying circular economy principles.\n\nRecycled Polymer Admixtures\n\nInnovative polymer admixtures made from recycled plastics provide enhanced workability, reduced bleeding, and improved durability. These admixtures give new life to plastic waste while creating superior concrete mixes that meet or exceed traditional performance standards.\n\nBio-Based Admixtures\n\nDerived from renewable sources such as plant-based materials, bio-based admixtures offer water reduction, improved workability, and enhanced setting control. These natural alternatives to synthetic chemicals demonstrate that sustainability and performance can coexist effectively.\n\nSustainability Benefits\n\nCarbon Footprint Reduction\n\nEco-friendly admixtures significantly reduce the carbon footprint of construction projects through multiple mechanisms. By allowing partial replacement of Portland cement with recycled materials, these admixtures can reduce CO2 emissions by 15-30% per cubic meter of concrete. Additionally, improved durability means longer-lasting structures that require fewer repairs and replacements over time.\n\nWaste Reduction and Circular Economy\n\nThese admixtures transform industrial waste streams into valuable construction materials. Fly ash from power plants, silica fume from silicon production, and recycled polymers all find new purpose in high-performance concrete mixes. This approach not only reduces landfill burden but also decreases the need for virgin material extraction.\n\nEnergy Efficiency\n\nMany eco-friendly admixtures reduce the energy requirements for concrete production and curing. Some allow for lower curing temperatures, while others accelerate strength development, reducing overall energy consumption in the construction process.\n\nLEED Certification and Green Building Standards\n\nEco-friendly admixtures contribute significantly to LEED (Leadership in Energy and Environmental Design) certification and other green building standards. These materials earn points in multiple LEED categories:\n\n• Materials and Resources: Using recycled content and regional materials\n• Innovation in Design: Implementing cutting-edge sustainable technologies\n• Energy and Atmosphere: Reducing operational energy through improved building envelope performance\n• Indoor Environmental Quality: Using low-emission materials that improve air quality\n\nPerformance Advantages\n\nContrary to common misconceptions, eco-friendly admixtures often enhance rather than compromise performance. Many provide superior durability, reduced permeability, and increased resistance to environmental factors such as freeze-thaw cycles, chemical attack, and carbonation.\n\nImproved workability characteristics make these admixtures easier to place and finish, reducing labor costs and improving construction quality. Enhanced long-term performance reduces maintenance requirements and extends service life, providing both economic and environmental benefits.\n\nImplementation Considerations\n\nSuccessful implementation of eco-friendly admixtures requires careful consideration of mix design, local availability, and project-specific requirements. Quality control procedures must account for the unique characteristics of these materials, and construction teams may require additional training to optimize their use.\n\nCost considerations should include lifecycle analysis rather than just initial material costs. While some eco-friendly admixtures may carry higher upfront costs, the combination of improved performance, reduced maintenance, and potential LEED certification benefits often results in positive long-term economic outcomes.\n\nFuture Innovations\n\nThe field of eco-friendly admixtures continues to evolve rapidly, with ongoing research into nanotechnology applications, bio-engineered materials, and smart admixtures that respond to environmental conditions. These developments promise even greater environmental benefits and performance improvements.\n\nAs regulatory frameworks increasingly favor sustainable construction practices and carbon pricing becomes more prevalent, eco-friendly admixtures will transition from optional upgrades to essential components of responsible construction.\n\nOur comprehensive range of eco-friendly admixture solutions demonstrates that environmental responsibility and superior performance are not mutually exclusive. By choosing sustainable admixtures, construction professionals contribute to LEED certification goals, reduce environmental impact, and create structures that perform better and last longer, supporting both a healthier planet and stronger infrastructure for future generations.',
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

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPosts[]>([]);
  const [hasNext, setHasNext] = useState(false);
  const [skip, setSkip] = useState(0);
  const limit = 9;

  // Directly set blogs on initial render and when loading more
  useState(() => {
    const start = skip;
    const end = skip + limit;
    const items = mockBlogPosts.slice(start, end);
    if (skip === 0) {
      setBlogs(items);
    } else {
      setBlogs(prev => [...prev, ...items]);
    }
    setHasNext(end < mockBlogPosts.length);
  });

  const loadMore = () => {
    if (hasNext) {
      setSkip(prev => prev + limit);
      const start = skip + limit;
      const end = start + limit;
      const items = mockBlogPosts.slice(start, end);
      setBlogs(prev => [...prev, ...items]);
      setHasNext(end < mockBlogPosts.length);
    }
  };


  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      {/* Hero Section */}
      <section className="w-full max-w-400 mx-auto px-8 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-6xl lg:text-8xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
            Industry Insights
          </h1>
          <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
          <p className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
            Expert guidance, technical tips, and construction industry updates
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <div className="min-h-150">
            {blogs.length > 0 ? (
              <>
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {blogs.map((blog, index) => (
                    <motion.div
                      key={blog._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link href={`/blogs/${blog._id}`}>
                        <div className="group bg-[#FFFFFF] border border-[#E0E0E0] rounded-sm overflow-hidden hover:border-[#e4b725] transition-all duration-500 h-full flex flex-col">
                          <div className="aspect-16/10 overflow-hidden">
                            <Image 
                              src={blog.coverImage || '/images/common.png'}
                              alt={blog.title || 'Blog post'}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              width={600}
                              height={300}
                            />
                          </div>
                          <div className="p-8 flex-1 flex flex-col">
                            <div className="flex items-center gap-4 mb-4 text-[#333333]/60">
                              {blog.publishDate && (
                                  <div className="flex items-center gap-2">
                                      <Calendar className="h-4 w-4 text-[#333333]/60" strokeWidth={1.5} />
                                      <span className="font-paragraph text-xs">
                                        {blog.publishDate instanceof Date ? blog.publishDate.toISOString().slice(0, 10) : blog.publishDate}
                                      </span>
                                    </div>
                              )}
                            </div>
                            {blog.category && (
                              <div className="inline-block px-3 py-1 bg-[#FFFFFF]/5 rounded-sm mb-4 self-start border border-[#FFFFFF]/10">
                                <span className="font-paragraph text-xs text-[#e4b725] font-medium" style={{ fontFamily: 'sora', fontSize: '0.75rem', lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: 500 }}>
                                  {blog.category}
                                </span>
                              </div>
                            )}
                            <h3 className="font-heading text-2xl font-semibold text-[#333333] mb-3 group-hover:text-[#e4b725] transition-colors duration-300" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}>
                              {blog.title}
                            </h3>
                            <p className="font-paragraph text-sm text-[#333333]/70 leading-relaxed line-clamp-3 mb-6 flex-1" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                              {blog.content}
                            </p>
                            <span className="inline-flex items-center font-paragraph text-sm text-[#e4b725] group-hover:gap-2 transition-all duration-300" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {hasNext && (
                  <div className="text-center mt-16">
                    <Button
                      onClick={loadMore}
                      className="bg-[#e4b725] hover:bg-[#e4b725]/90 text-[#374151] font-paragraph px-10 py-6 h-auto"
                    >
                      Load More Articles
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-[#333333]/60" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                  No blog posts available yet
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
