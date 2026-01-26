"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Products, CalculatorFormulas } from '@/entities';

const mockCalculatorFormulas: CalculatorFormulas[] = [
  {
    _id: '1',
    formulaName: 'Tile Adhesive Standard Coverage',
    description: 'Calculates the total amount of tile adhesive required for a given area, considering the product\'s coverage rate and an optional wastage percentage.',
    calculationLogic: 'area_sqm * coverageRate_kg_per_sqm * (1 + wastage_percentage / 100)',
    variables: 'area_sqm, coverageRate_kg_per_sqm, wastage_percentage',
    outputUnit: 'kg',
    isActive: true,
    lastUpdated: '2026-01-05',
    _createdDate: new Date('2026-01-05'),
    _updatedDate: new Date('2026-01-06'),
  },
  {
    _id: '2',
    formulaName: 'Tile Grout Calculation',
    description: 'Estimates the quantity of grout needed based on the total area, average joint width, joint depth, and product-specific coverage factor.',
    calculationLogic: 'area_sqm * (jointWidth_mm / 1000) * (jointDepth_mm / 1000) * groutFactor_kg_per_cubic_meter * (1 + wastage_percentage / 100)',
    variables: 'area_sqm, jointWidth_mm, jointDepth_mm, groutFactor_kg_per_cubic_meter, wastage_percentage',
    outputUnit: 'kg',
    isActive: true,
    lastUpdated: '2026-01-05',
    _createdDate: new Date('2026-01-05'),
    _updatedDate: new Date('2026-01-06'),
  },
  {
    _id: '3',
    formulaName: 'Liquid Waterproofing Membrane Coverage',
    description: 'Determines the total liters of liquid waterproofing membrane required for a specified area and number of coats, based on the product\'s per-coat coverage rate.',
    calculationLogic: 'area_sqm * numberOfCoats * coverageRate_liters_per_sqm_per_coat * (1 + wastage_percentage / 100)',
    variables: 'area_sqm, numberOfCoats, coverageRate_liters_per_sqm_per_coat, wastage_percentage',
    outputUnit: 'liters',
    isActive: true,
    lastUpdated: '2026-01-05',
    _createdDate: new Date('2026-01-05'),
    _updatedDate: new Date('2026-01-06'),
  },
  {
    _id: '4',
    formulaName: 'Concrete Repair Mortar Volume',
    description: 'Calculates the total volume of concrete repair mortar needed for a specific repair area and average depth, then converts it to kilograms using product density.',
    calculationLogic: 'area_sqm * (averageDepth_mm / 1000) * density_kg_per_cubic_meter * (1 + wastage_percentage / 100)',
    variables: 'area_sqm, averageDepth_mm, density_kg_per_cubic_meter, wastage_percentage',
    outputUnit: 'kg',
    isActive: true,
    lastUpdated: '2026-01-05',
    _createdDate: new Date('2026-01-05'),
    _updatedDate: new Date('2026-01-06'),
  },
  {
    _id: '5',
    formulaName: 'Self-Leveling Compound Coverage',
    description: 'Estimates the quantity of self-leveling compound required for a given area and desired thickness, considering the product\'s density and an optional wastage.',
    calculationLogic: 'area_sqm * (desiredThickness_mm / 1000) * density_kg_per_cubic_meter * (1 + wastage_percentage / 100)',
    variables: 'area_sqm, desiredThickness_mm, density_kg_per_cubic_meter, wastage_percentage',
    outputUnit: 'kg',
    isActive: true,
    lastUpdated: '2026-01-05',
    _createdDate: new Date('2026-01-05'),
    _updatedDate: new Date('2026-01-06'),
  },
];
const mockProducts: Products[] = [
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
    description: 'Acrylic Polymer Based White Crack Filler. Strong bond, flexible, water resistant. For filling cracks in concrete, masonry, wood, plaster.',
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

export default function CalculatorPage() {
  const [products, setProducts] = useState<Products[]>([]);
  const [formulas, setFormulas] = useState<CalculatorFormulas[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [inputType, setInputType] = useState<'dimensions' | 'area'>('dimensions');
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [totalArea, setTotalArea] = useState<string>('');
  const [wastage, setWastage] = useState<string>('10');
  const [result, setResult] = useState<{
    area: number;
    materialKg: number;
    bags: number;
  } | null>(null);

  useState(() => {
    setProducts(mockProducts.filter(p => p.coverageRate && p.coverageRate > 0));
    setFormulas(mockCalculatorFormulas.filter(f => f.isActive));
  });

  const calculateMaterial = () => {
    if (!selectedProduct) return;
    const product = products.find(p => p._id === selectedProduct);
    if (!product || !product.coverageRate) return;
    let area = 0;
    if (inputType === 'dimensions') {
      const l = parseFloat(length);
      const w = parseFloat(width);
      if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) return;
      area = l * w;
    } else {
      const a = parseFloat(totalArea);
      if (isNaN(a) || a <= 0) return;
      area = a;
    }

    const wastagePercent = parseFloat(wastage) || 0;
    const areaWithWastage = area * (1 + wastagePercent / 100);
    
    // Material calculation: area / coverage rate
    const materialKg = areaWithWastage / product.coverageRate;
    
    // Assuming 25kg bags (industry standard)
    const bags = Math.ceil(materialKg / 25);

    setResult({
      area: Math.round(area * 100) / 100,
      materialKg: Math.round(materialKg * 100) / 100,
      bags
    });
  };

  const resetCalculator = () => {
    setSelectedProduct('');
    setLength('');
    setWidth('');
    setTotalArea('');
    setWastage('10');
    setResult(null);
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
          <Calculator className="w-16 h-16 text-[#e4b725] mx-auto mb-8" strokeWidth={1.5} />
          <h1 className="font-heading text-6xl lg:text-8xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
            Material Calculator
          </h1>
          <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
          <p className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
            Calculate precise material requirements for your construction project
          </p>
        </motion.div>
      </section>

      {/* Calculator Section (Home theme) */}
      <section className="w-full bg-[#374151] text-[#FFFFFF] py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 lg:p-10 bg-transparent border-[#FFFFFF]/10">
                <h2 className="font-heading text-3xl font-bold text-[#FFFFFF] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.875rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 700 }}>
                  Project Details
                </h2>

                <div className="space-y-6">
                  {/* Product Selection */}
                  <div>
                    <Label htmlFor="product" className="font-paragraph text-base text-[#FFFFFF]/90 mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                      Select Product *
                    </Label>
                    <Select value={selectedProduct} onValueChange={setSelectedProduct}>
                      <SelectTrigger id="product" className="font-paragraph">
                        <SelectValue placeholder="Choose a product" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem key={product._id} value={product._id}>
                            {product.productName}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Input Type Selection */}
                  <div>
                    <Label className="font-paragraph text-base text-[#FFFFFF]/90 mb-3 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                      Measurement Method
                    </Label>
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant={inputType === 'dimensions' ? 'default' : 'outline'}
                        onClick={() => setInputType('dimensions')}
                        className={`flex-1 font-paragraph ${
                          inputType === 'dimensions'
                            ? 'bg-[#374151] text-[#FFFFFF] border border-[#FFFFFF]/10'
                            : 'border-2 border-[#FFFFFF]/20 text-[#FFFFFF] hover:bg-[#FFFFFF]/5 hover:text-[#FFFFFF]'
                        }`}
                      >
                        Length × Width
                      </Button>
                      <Button
                        type="button"
                        variant={inputType === 'area' ? 'default' : 'outline'}
                        onClick={() => setInputType('area')}
                        className={`flex-1 font-paragraph ${
                          inputType === 'area'
                            ? 'bg-[#374151] text-[#FFFFFF] border border-[#FFFFFF]/10'
                            : 'border-2 border-[#FFFFFF]/20 text-[#FFFFFF] hover:bg-[#FFFFFF]/5 hover:text-[#FFFFFF]'
                        }`}
                      >
                        Total Area
                      </Button>
                    </div>
                  </div>

                  {/* Dimensions or Area Input */}
                  {inputType === 'dimensions' ? (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="length" className="font-paragraph text-base text-[#FFFFFF]/90 mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                          Length (m) *
                        </Label>
                        <Input
                          id="length"
                          type="number"
                          step="0.01"
                          min="0"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                          placeholder="0.00"
                          className="font-paragraph bg-[#FFFFFF]/5 text-[#FFFFFF] placeholder-[#FFFFFF]/60"
                        />
                      </div>
                      <div>
                        <Label htmlFor="width" className="font-paragraph text-base text-[#FFFFFF]/90 mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                          Width (m) *
                        </Label>
                        <Input
                          id="width"
                          type="number"
                          step="0.01"
                          min="0"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                          placeholder="0.00"
                          className="font-paragraph bg-[#FFFFFF]/5 text-[#FFFFFF] placeholder-[#FFFFFF]/60"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Label htmlFor="area" className="font-paragraph text-base text-[#FFFFFF]/90 mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                        Total Area (m²) *
                      </Label>
                      <Input
                        id="area"
                        type="number"
                        step="0.01"
                        min="0"
                        value={totalArea}
                        onChange={(e) => setTotalArea(e.target.value)}
                        placeholder="0.00"
                        className="font-paragraph bg-[#FFFFFF]/5 text-[#FFFFFF] placeholder-[#FFFFFF]/60"
                      />
                    </div>
                  )}

                  {/* Wastage */}
                  <div>
                    <Label htmlFor="wastage" className="font-paragraph text-base text-[#FFFFFF]/90 mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                      Wastage Factor (%)
                    </Label>
                    <Input
                      id="wastage"
                      type="number"
                      step="1"
                      min="0"
                      max="100"
                      value={wastage}
                      onChange={(e) => setWastage(e.target.value)}
                      className="font-paragraph bg-[#FFFFFF]/5 text-[#FFFFFF] placeholder-[#FFFFFF]/60"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={calculateMaterial}
                      className="flex-1 bg-[#e4b725] hover:bg-[#e4b725]/90 text-[#374151] font-paragraph py-6"
                    >
                      Calculate
                    </Button>
                    <Button
                      onClick={resetCalculator}
                      variant="outline"
                      className="border-2 border-[#FFFFFF]/20 text-[#FFFFFF] hover:bg-[#FFFFFF]/5 hover:text-[#FFFFFF] font-paragraph py-6"
                    >
                      Reset
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 lg:p-10 bg-[#374151] text-[#FFFFFF] border-[#374151]">
                <h2 className="font-heading text-3xl font-bold mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.875rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 700 }}>
                  Calculation Results
                </h2>

                {result ? (
                  <div className="space-y-8">
                    <div className="bg-[#FFFFFF]/10 rounded-sm p-6">
                      <p className="font-paragraph text-sm text-[#FFFFFF]/80 mb-2" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                        Total Area
                      </p>
                      <p className="font-heading text-4xl font-bold text-[#e4b725]" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
                        {result.area} m²
                      </p>
                    </div>

                    <div className="bg-[#FFFFFF]/10 rounded-sm p-6">
                      <p className="font-paragraph text-sm text-[#FFFFFF]/80 mb-2" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                        Required Material
                      </p>
                      <p className="font-heading text-4xl font-bold text-[#e4b725]" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
                        {result.materialKg} kg
                      </p>
                    </div>

                    <div className="bg-[#FFFFFF]/10 rounded-sm p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Package className="h-5 w-5 text-[#FFFFFF]/80" />
                        <p className="font-paragraph text-sm text-[#FFFFFF]/80" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                          Bags Required (20kg each)
                        </p>
                      </div>
                      <p className="font-heading text-4xl font-bold text-[#e4b725]" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
                        {result.bags} bags
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#FFFFFF]/20">
                      <p className="font-paragraph text-xs text-[#FFFFFF]/70 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '0.75rem', lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: 400 }}>
                        * Results include {wastage}% wastage factor. Actual requirements may vary based on 
                        application method, surface conditions, and project specifications.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <Calculator className="w-16 h-16 text-[#FFFFFF]/30 mb-6" strokeWidth={1.5} />
                    <p className="font-paragraph text-base text-[#FFFFFF]/70" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                      Enter project details and click Calculate to see material requirements
                    </p>
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
