"use client";
import { useEffect, useState } from 'react';
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
import { mockProducts, mockCalculatorFormulas } from '@/entities/mockData';

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

  useEffect(() => {
    const activeProducts = mockProducts.filter(p => p.coverageRate && p.coverageRate > 0);
    setProducts(activeProducts);
    setFormulas(mockCalculatorFormulas.filter(f => f.isActive));
  }, []);

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
          <Calculator className="w-16 h-16 text-[#B8A06A] mx-auto mb-8" strokeWidth={1.5} />
          <h1 className="font-heading text-6xl lg:text-8xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
            Material Calculator
          </h1>
          <p className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
            Calculate precise material requirements for your construction project
          </p>
        </motion.div>
      </section>

      {/* Calculator Section */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 lg:p-10 bg-[#FFFFFF] border-[#E0E0E0]">
                <h2 className="font-heading text-3xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.875rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 700 }}>
                  Project Details
                </h2>

                <div className="space-y-6">
                  {/* Product Selection */}
                  <div>
                    <Label htmlFor="product" className="font-paragraph text-base text-[#333333] mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
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
                    <Label className="font-paragraph text-base text-[#333333] mb-3 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                      Measurement Method
                    </Label>
                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant={inputType === 'dimensions' ? 'default' : 'outline'}
                        onClick={() => setInputType('dimensions')}
                        className={`flex-1 font-paragraph ${
                          inputType === 'dimensions'
                            ? 'bg-[#2C3E50] text-[#FFFFFF]'
                            : 'border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#FFFFFF]'
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
                            ? 'bg-[#2C3E50] text-[#FFFFFF]'
                            : 'border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#FFFFFF]'
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
                        <Label htmlFor="length" className="font-paragraph text-base text-[#333333] mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
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
                          className="font-paragraph"
                        />
                      </div>
                      <div>
                        <Label htmlFor="width" className="font-paragraph text-base text-[#333333] mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
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
                          className="font-paragraph"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Label htmlFor="area" className="font-paragraph text-base text-[#333333] mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
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
                        className="font-paragraph"
                      />
                    </div>
                  )}

                  {/* Wastage */}
                  <div>
                    <Label htmlFor="wastage" className="font-paragraph text-base text-[#333333] mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
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
                      className="font-paragraph"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={calculateMaterial}
                      className="flex-1 bg-[#2C3E50] hover:bg-[#2C3E50]/90 text-[#FFFFFF] font-paragraph py-6"
                    >
                      Calculate
                    </Button>
                    <Button
                      onClick={resetCalculator}
                      variant="outline"
                      className="border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#FFFFFF] font-paragraph py-6"
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
              <Card className="p-8 lg:p-10 bg-[#2C3E50] text-[#FFFFFF] border-[#2C3E50]">
                <h2 className="font-heading text-3xl font-bold mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.875rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 700 }}>
                  Calculation Results
                </h2>

                {result ? (
                  <div className="space-y-8">
                    <div className="bg-[#FFFFFF]/10 rounded-sm p-6">
                      <p className="font-paragraph text-sm text-[#FFFFFF]/80 mb-2" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                        Total Area
                      </p>
                      <p className="font-heading text-4xl font-bold text-[#B8A06A]" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
                        {result.area} m²
                      </p>
                    </div>

                    <div className="bg-[#FFFFFF]/10 rounded-sm p-6">
                      <p className="font-paragraph text-sm text-[#FFFFFF]/80 mb-2" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                        Required Material
                      </p>
                      <p className="font-heading text-4xl font-bold text-[#B8A06A]" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
                        {result.materialKg} kg
                      </p>
                    </div>

                    <div className="bg-[#FFFFFF]/10 rounded-sm p-6">
                      <div className="flex items-center gap-3 mb-2">
                        <Package className="h-5 w-5 text-[#FFFFFF]/80" />
                        <p className="font-paragraph text-sm text-[#FFFFFF]/80" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                          Bags Required (25kg each)
                        </p>
                      </div>
                      <p className="font-heading text-4xl font-bold text-[#B8A06A]" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
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
