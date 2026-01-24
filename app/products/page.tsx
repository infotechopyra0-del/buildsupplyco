"use client";
export const dynamic = "force-dynamic";
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { Products } from '@/entities';

export const mockProducts: Products[] = [
  {
    _id: '1',
    productName: 'FlexiSeal Pro Waterproofing',
    category: 'Waterproofing Solutions',
    description: 'A two-component, polymer-modified cementitious waterproofing membrane for concrete and masonry surfaces. Ideal for bathrooms, balconies, and swimming pools.',
    specifications: 'ASTM C1202, EN 14891. Pot life: 60 mins. Curing time: 7 days. Application temperature: 5°C to 35°C.',
    coverageRate: 1.5,
    wastagePercentage: 10,
    productImage: '/images/FlexiSealProWaterproofing.png',
    _createdDate: new Date('2026-01-03'),
    _updatedDate: new Date('2026-01-04'),
  },
  {
    _id: '2',
    productName: 'AquaGuard PU Membrane',
    category: 'Waterproofing Solutions',
    description: 'A single-component, liquid-applied polyurethane waterproofing membrane for roofs, terraces, and wet areas. Forms a seamless, elastic, and durable barrier.',
    specifications: 'ASTM C836, ETAG 005. Elongation: >600%. Tensile strength: 3 MPa. Tack-free time: 6 hours.',
    coverageRate: 1.2,
    wastagePercentage: 8,
    productImage: '/images/AquaGuardPUMembrane.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '3',
    productName: 'TileMaster Pro Adhesive',
    category: 'Tile & Stone Adhesive and Grouts',
    description: 'A high-performance, polymer-modified cementitious adhesive for fixing all types of tiles and natural stone on various substrates. Suitable for internal and external applications.',
    specifications: 'EN 12004 C2TE S1. Open time: 30 mins. Pot life: 4 hours. Slip resistance: <0.5mm.',
    coverageRate: 4,
    wastagePercentage: 5,
    productImage: '/images/TileMasterProAdhesive.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '4',
    productName: 'DuraGrout Epoxy',
    category: 'Tile & Stone Adhesive and Grout',
    description: 'A two-component, acid-resistant epoxy grout for ceramic tiles, vitrified tiles, and natural stone. Ideal for areas requiring high hygiene and chemical resistance.',
    specifications: 'EN 13888 RG. Pot life: 45 mins. Walkable after: 24 hours. Chemical resistance: Excellent.',
    coverageRate: 0.8,
    wastagePercentage: 15,
    productImage: '/images/DuraGroutEpoxy.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '5',
    productName: 'SpeedFix Tile Adhesive',
    category: 'Tile & Stone Adhesive and Grout',
    description: 'A rapid-setting, polymer-modified cementitious adhesive for quick tile installations. Allows for grouting in just 3 hours.',
    specifications: 'EN 12004 C2F. Open time: 15 mins. Pot life: 30 mins. Grout after: 3 hours.',
    coverageRate: 1.2,
    wastagePercentage: 8,
    productImage: '/images/SpeedFixTileAdhesive.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '6',
    productName: 'ReCon Structural Mortar',
    category: 'Concrete Repair Solutions',
    description: 'A high-strength, polymer-modified, fiber-reinforced repair mortar for structural concrete repairs. Excellent bond to existing concrete.',
    specifications: 'EN 1504-3 R3. Compressive strength: >40 MPa. Layer thickness: 10-50mm.',
    coverageRate: 2,
    wastagePercentage: 10,
    productImage: '/images/ReConStructuralMortar.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '7',
    productName: 'CrackSeal Epoxy Filler',
    category: 'Concrete Repair Solutions',
    description: 'A two-component, low-viscosity epoxy resin for injecting and filling cracks in concrete structures. Restores structural integrity.',
    specifications: 'ASTM C881 Type I, II, IV, V, Grade 1. Viscosity: 200-400 cps. Pot life: 20 mins.',
    coverageRate: 1,
    wastagePercentage: 20,
    productImage: '/images/CrackSealEpoxyFiller.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '8',
    productName: 'LevelFloor SLU',
    category: 'Flooring Solutions',
    description: 'A cementitious, self-leveling underlayment for smoothing and leveling interior concrete substrates before installing floor coverings.',
    specifications: 'ASTM C1708. Compressive strength: >25 MPa. Walkable after: 4 hours. Layer thickness: 3-15mm.',
    coverageRate: 1.7,
    wastagePercentage: 5,
    productImage: '/images/LevelFloorSLU.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '9',
    productName: 'DuraCoat Industrial Epoxy',
    category: 'Flooring Solutions',
    description: 'A two-component, solvent-free epoxy coating for industrial floors requiring high abrasion and chemical resistance.',
    specifications: 'ASTM D4060, ASTM D2240. Abrasion resistance: Excellent. Chemical resistance: High. Pot life: 30 mins.',
    coverageRate: 0.25,
    wastagePercentage: 8,
    productImage: '/images/DuraCoatIndustrialEpoxy.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '10',
    productName: 'FormEase Release Agent',
    category: 'Stamping Solutions',
    description: 'A liquid release agent for stamped concrete applications, preventing stamping tools from sticking to fresh concrete.',
    specifications: 'Non-staining, VOC compliant. Application: Spray or brush.',
    coverageRate: 0.1,
    wastagePercentage: 10,
    productImage: '/images/FormEaseReleaseAgent.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '11',
    productName: 'StampGuard Sealer',
    category: 'Stamping Solutions',
    description: 'An acrylic-based, clear sealer for stamped concrete, enhancing color and providing protection against abrasion and weathering.',
    specifications: 'UV resistant, non-yellowing. Drying time: 2-4 hours. Recoat time: 4-6 hours.',
    coverageRate: 0.2,
    wastagePercentage: 5,
    productImage: '/images/StampGuardSealer.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '12',
    productName: 'DecoMicro Cement',
    category: 'Decorative Surface Finish',
    description: 'A decorative, thin-layer microcement system for creating seamless, modern finishes on floors, walls, and furniture.',
    specifications: 'Adhesion: Excellent. Layer thickness: 2-3mm total. Curing time: 7 days.',
    coverageRate: 1,
    wastagePercentage: 12,
    productImage: '/images/DecoMicroCement.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '13',
    productName: 'WallArt Texture Paint',
    category: 'Texture Paint Coatings',
    description: 'A high-quality acrylic texture paint for interior and exterior walls, providing a durable and decorative finish.',
    specifications: 'Weather resistant, alkali resistant. Drying time: 4-6 hours. Application: Trowel or roller.',
    coverageRate: 0.5,
    wastagePercentage: 7,
    productImage: '/images/WallArtTexturePaint.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '14',
    productName: 'FlowEnhance Admixture',
    category: 'Admixtures',
    description: 'A high-range water-reducing superplasticizer for concrete, improving workability and strength without increasing water content.',
    specifications: 'ASTM C494 Type F. Dosage: 0.5-2.0% by weight of cement.',
    coverageRate: 0.01,
    wastagePercentage: 3,
    productImage: '/images/FlowEnhanceAdmixture.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '15',
    productName: 'BuildStrong Masonry Mortar',
    category: 'Mortar',
    description: 'A pre-mixed, high-strength masonry mortar for brickwork, blockwork, and stone masonry. Provides excellent bond and durability.',
    specifications: 'ASTM C270 Type S. Compressive strength: >12 MPa. Pot life: 2 hours.',
    coverageRate: 20,
    wastagePercentage: 10,
    productImage: '/images/BuildStrongMasonryMortar.png',
    _createdDate: new Date('2026-01-07'),
    _updatedDate: new Date('2026-01-08'),
  },
  {
    _id: '16',
    productName: 'Concreed Zincreed 32',
    category: 'Anti-Corrosive Coating',
    description: 'Zinc based Anti-Corrosive Technology for superior performance, UV resistance, speedy drying, and high zinc content.',
    specifications: 'Superior Performance, UV Resistant, Speedy Dry, High Zinc Content',
    coverageRate: 0.12,
    wastagePercentage: 8,
    productImage: '/images/ConcreedZincreed32.png',
    _createdDate: new Date('2026-01-24'),
    _updatedDate: new Date('2026-01-24'),
  },
  {
    _id: '17',
    productName: 'Concreed Crack Filler Paste',
    category: 'Crack Filler',
    description: 'Acrylic Polymer Based White Crack Filler. Strong bond, flexible, water resistant. For filling cracks in concrete, masonry, wood. Easy application with putty knife or trowel.',
    specifications: 'Application Advantage, Flexibility, Paint Ability, Ease of Application',
    coverageRate: 1.2,
    wastagePercentage: 10,
    productImage: '/images/ConcreedCrackFillerPaste.png',
    _createdDate: new Date('2026-01-24'),
    _updatedDate: new Date('2026-01-24'),
  },
  {
    _id: '18',
    productName: 'Concreed CreedFlex',
    category: 'Waterproofing',
    description: 'Polyacrylic-based waterproofing product. Prevents water penetration, flexible, strong adhesion, durable. Apply on roofs, walls, terraces.',
    specifications: 'Prevents Water Penetration, Flexibility, Strong Adhesion, Durable',
      coverageRate: 1.5,
      wastagePercentage: 10,
    productImage: '/images/ConcreedCreedFlex.png',
    _createdDate: new Date('2026-01-24'),
    _updatedDate: new Date('2026-01-24'),
  },
  {
    _id: '19',
    productName: 'Concreed GPOXY-05 Epoxy Tile Grout',
    category: 'Tile Grout',
    description: 'Epoxy-based tile grout suitable for swimming pools, wall tiles, external facades, and vitrified tiles.',
    specifications: 'High chemical resistance, Waterproof, Easy to clean, Durable',
    coverageRate: 0.5, 
    wastagePercentage: 12,
    productImage: '/images/ConcreedGpoxy05EpoxyTileGrout.png',
    _createdDate: new Date('2026-01-24'),
    _updatedDate: new Date('2026-01-24'),
  },
  {
    _id: '20',
    productName: 'Concreed Creed+ Admixture',
    category: 'Admixture',
    description: 'High-performance liquid waterproofing admixture for concrete. Ideal for basements, brick bat coba, and external walls.',
    specifications: 'Improves waterproofing, Increases durability, Easy to use, Suitable for multiple applications',
    coverageRate: 0.02,
    wastagePercentage: 5,
    productImage: '/images/ConcreedCreedPlusAdmixture.png',
    _createdDate: new Date('2026-01-24'),
    _updatedDate: new Date('2026-01-24'),
  },
  {
    _id: '21',
    productName: 'Creed TA Grey',
    category: 'Tile Adhesive',
    description: 'High performance cementitious tile adhesive for permanent fixing of ceramic tiles in both damp and submerged conditions. Suitable for concrete, plaster, and other substrates.',
    specifications: 'High-strength cement, selected mineral charges, specific additives, suitable for damp and submerged conditions',
    coverageRate: 4.5,
    wastagePercentage: 10,
    productImage: '/images/CreedTAGrey.png',
    _createdDate: new Date('2026-01-24'),
    _updatedDate: new Date('2026-01-24'),
  },
  {
    _id: '22',
    productName: 'MCRETE-PL Fiber Reinforce Mortar',
    category: 'Mortar',
    description: 'Cement sand fiber-reinforced mortar for internal and external surface corrections. Superior adhesion, thermal crack resistant, durable finish.',
    specifications: 'Superior Adhesion, Thermal Crack Resistant, Fiber Reinforced Render, Crack-Resistant, Durable Finish',
    coverageRate: 18,
    wastagePercentage: 12,
    productImage: '/images/MCRETEPLFiberReinforceMortar.png',
    _createdDate: new Date('2026-01-24'),
    _updatedDate: new Date('2026-01-24'),
  },
  {
    _id: '23',
    productName: 'Concreed Creed2K',
    category: 'Waterproofing Compound',
    description: 'Waterproofing compound for plaster and concrete. Provides enhanced protection and durability for construction surfaces.',
    specifications: 'Best Trusted Brand, Certified Company, Made in India',
    coverageRate: 0.15,
    wastagePercentage: 8,
    productImage: '/images/ConcreedCreed2K.png',
    _createdDate: new Date('2026-01-24'),
    _updatedDate: new Date('2026-01-24'),
  },
];

import { Suspense } from 'react';

function ProductsPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categories = [
    'All',
    'Waterproofing',
    'Adhesive',
    'Concrete Repair',
    'Flooring',
    'Stamping',
    'Decorative',
    'Texture Paint',
    'Admixtures',
    'Mortar'
  ];
  const selectedCategory = searchParams.get('category') || 'All';

  const filteredProducts = selectedCategory === 'All'
    ? mockProducts
    : mockProducts.filter(p =>
        typeof p.category === 'string' &&
        p.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      router.push('/products');
    } else {
      router.push(`/products?category=${encodeURIComponent(category)}`);
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
          <h1
            className="font-heading text-6xl lg:text-8xl font-bold text-[#333333] mb-8"
            style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
          >
            Our Products
          </h1>
          <p
            className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed"
            style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.75', letterSpacing: '0.01em', fontWeight: 400 }}
          >
            Comprehensive range of premium construction materials engineered for excellence
          </p>
        </motion.div>
      </section>
      {/* Filter Section */}
      <section className="w-full bg-[#FFFFFF] py-8 border-y border-[#E0E0E0] sticky top-22 z-40">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-[#333333]" />
            <span
              className="font-paragraph text-base text-[#333333] font-medium"
              style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: 500 }}
            >
              Filter by Category:
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryChange(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`font-paragraph text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#2C3E50] text-[#FFFFFF] hover:bg-[#2C3E50]/90'
                    : 'border-2 border-[#333333] text-[#33333353] hover:bg-[#333333] hover:text-[#FFFFFF]'
                }`}
                style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>
      {/* Products Grid */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <div className="min-h-150">
            {filteredProducts.length > 0 ? (
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/products/${product._id}`}>
                      <div className="group bg-[#FFFFFF] border border-[#E0E0E0] rounded-sm overflow-hidden hover:border-[#B8A06A] transition-all duration-500">
                        <div className="aspect-4/3 overflow-hidden">
                          <Image
                            src={product.productImage || ''}
                            alt={product.productName || 'Product'}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            width={600}
                            height={450}
                          />
                        </div>
                        <div className="p-8">
                          <div className="inline-block px-3 py-1 bg-[#F8F8F8] rounded-sm mb-4">
                            <span
                              className="font-paragraph text-xs text-[#B8A06A] font-medium"
                              style={{ fontFamily: 'sora', fontSize: '0.75rem', lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: 500 }}
                            >
                              {product.category}
                            </span>
                          </div>
                          <h3
                            className="font-heading text-2xl font-semibold text-[#333333] mb-3 group-hover:text-[#B8A06A] transition-colors duration-300"
                            style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '1.875', letterSpacing: '0.01em', fontWeight: 600 }}
                          >
                            {product.productName}
                          </h3>
                          <p
                            className="font-paragraph text-sm text-[#333333]/70 leading-relaxed line-clamp-3"
                            style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400, color: '#333333b3' }}
                          >
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p
                  className="font-paragraph text-lg text-[#333333]/60"
                  style={{ fontFamily: 'sora', fontSize: '1.25rem', lineHeight: '1.75', letterSpacing: '0.01em', fontWeight: 400, color: '#33333399' }}
                >
                  No products found in this category
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

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPageInner />
    </Suspense>
  );
}
