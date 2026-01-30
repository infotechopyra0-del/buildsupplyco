"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Package, Droplet, Layers, Ruler } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ProductsExtended, mockProductsExtended, CalculationType } from '@/entities/mockData';

export default function CalculatorPage() {
  const [products, setProducts] = useState<ProductsExtended[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string>('');
  const [currentProduct, setCurrentProduct] = useState<ProductsExtended | null>(null);
  
  // Common inputs
  const [inputType, setInputType] = useState<'dimensions' | 'area' | 'direct'>('dimensions');
  const [measurementUnit, setMeasurementUnit] = useState<'m' | 'ft'>('m');
  
  // Area-based inputs
  const [length, setLength] = useState<string>('');
  const [width, setWidth] = useState<string>('');
  const [totalArea, setTotalArea] = useState<string>('');
  
  // Cement-based inputs
  const [cementBags, setCementBags] = useState<string>('');
  const [dosagePercent, setDosagePercent] = useState<string>('');
  
  // Running length inputs
  const [runningLength, setRunningLength] = useState<string>('');
  
  const [result, setResult] = useState<{
    area?: number;
    materialAmount: number;
    containers: number;
    isLiquid: boolean;
    containerSize: number;
    calculationType: CalculationType;
    unit: string;
    cementBags?: number;
    runningLength?: number;
    mixedPackaging?: { powder: number; liquid: number };
  } | null>(null);

  useEffect(() => {
    setProducts(mockProductsExtended);
  }, []);

  useEffect(() => {
    if (selectedProduct) {
      const product = products.find(p => p._id === selectedProduct);
      setCurrentProduct(product || null);
      
      // Set default dosage based on product
      if (product && product.calculationType === 'cement') {
        setDosagePercent(product.coverageRate.toString());
      }
    } else {
      setCurrentProduct(null);
    }
  }, [selectedProduct, products]);

  const calculateMaterial = () => {
    if (!currentProduct) return;
    if (currentProduct.calculationType === 'area') {
      calculateAreaBased();
    } else if (currentProduct.calculationType === 'cement') {
      calculateCementBased();
    } else if (currentProduct.calculationType === 'running-length') {
      calculateRunningLength();
    }
  };

  const calculateAreaBased = () => {
    if (!currentProduct) return;
    let area = 0;
    if (inputType === 'dimensions') {
      const l = parseFloat(length);
      const w = parseFloat(width);
      if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) return;
      const l_m = measurementUnit === 'ft' ? l * 0.3048 : l;
      const w_m = measurementUnit === 'ft' ? w * 0.3048 : w;
      area = l_m * w_m;
    } else {
      const a = parseFloat(totalArea);
      if (isNaN(a) || a <= 0) return;
      area = measurementUnit === 'ft' ? a * 0.092903 : a;
    }
    // Calculate material based on coverage rate (sq.m per unit)
    const materialAmount = area / currentProduct.coverageRate;
    const isLiquid = currentProduct.productType?.toLowerCase() === 'liquid';
    const unit = isLiquid ? 'L' : 'kg';
    if (currentProduct.productName === 'CREED 2K' && currentProduct.mixRatio) {
      const totalRatio = currentProduct.mixRatio.powder + currentProduct.mixRatio.liquid;
      const powderAmount = materialAmount * (currentProduct.mixRatio.powder / totalRatio);
      const liquidAmount = materialAmount * (currentProduct.mixRatio.liquid / totalRatio);
      const primary15kg = Math.floor(materialAmount / 15);
      const remaining = materialAmount - (primary15kg * 15);
      const additional3kg = remaining > 0 ? Math.ceil(remaining / 3) : 0;
      setResult({
        area: Math.round(area * 100) / 100,
        materialAmount: Math.round(materialAmount * 100) / 100,
        containers: primary15kg + additional3kg,
        isLiquid: false,
        containerSize: 15,
        calculationType: 'area',
        unit: 'kg',
      });
      return;
    }
    let containerSize = currentProduct.packagingSizes[currentProduct.packagingSizes.length - 1];
    const containers = Math.ceil(materialAmount / containerSize);
    setResult({
      area: Math.round(area * 100) / 100,
      materialAmount: Math.round(materialAmount * 100) / 100,
      containers,
      isLiquid,
      containerSize,
      calculationType: 'area',
      unit
    });
  };

  const calculateCementBased = () => {
    if (!currentProduct) return;
    const bags = parseFloat(cementBags);
    const dosage = parseFloat(dosagePercent);
    if (isNaN(bags) || bags <= 0 || isNaN(dosage) || dosage <= 0) return;
    const cementWeight = bags * 50;
    const admixtureLitres = (cementWeight * dosage / 100);
    let containerSize = currentProduct.packagingSizes[currentProduct.packagingSizes.length - 1];
    const containers = Math.ceil(admixtureLitres / containerSize);
    setResult({
      cementBags: bags,
      materialAmount: Math.round(admixtureLitres * 100) / 100,
      containers,
      isLiquid: true,
      containerSize,
      calculationType: 'cement',
      unit: 'L'
    });
  };

  const calculateRunningLength = () => {
    if (!currentProduct) return;
    let lengthInMeters = 0;
    const length = parseFloat(runningLength);
    if (isNaN(length) || length <= 0) return;
    lengthInMeters = measurementUnit === 'ft' ? length * 0.3048 : length;
    const materialAmount = lengthInMeters / currentProduct.coverageRate;
    const isLiquid = currentProduct.productType?.toLowerCase() === 'liquid';
    const unit = isLiquid ? 'L' : 'kg';
    let containerSize = currentProduct.packagingSizes[currentProduct.packagingSizes.length - 1];
    const containers = Math.ceil(materialAmount / containerSize);
    setResult({
      runningLength: Math.round(lengthInMeters * 100) / 100,
      materialAmount: Math.round(materialAmount * 100) / 100,
      containers,
      isLiquid,
      containerSize,
      calculationType: 'running-length',
      unit
    });
  };

  const resetCalculator = () => {
    setSelectedProduct('');
    setLength('');
    setWidth('');
    setTotalArea('');
    setCementBags('');
    setDosagePercent('');
    setRunningLength('');
    // wastage removed
    setResult(null);
    setCurrentProduct(null);
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
                            {product.productName} ({product.calculationType})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {currentProduct && (
                      <p className="text-sm text-[#666] mt-2">
                        Type: {currentProduct.calculationType === 'area' ? 'Area-based' : currentProduct.calculationType === 'cement' ? 'Cement-based' : 'Running Length'}
                      </p>
                    )}
                  </div>

                  {/* Area-based inputs */}
                  {currentProduct?.calculationType === 'area' && (
                    <>
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

                      {/* Measurement Units */}
                      <div>
                        <Label className="font-paragraph text-base text-[#333333] mb-3 block" style={{ fontFamily: 'sora', fontSize: '1rem' }}>
                          Units
                        </Label>
                        <div className="flex gap-4">
                          <Button
                            type="button"
                            variant={measurementUnit === 'm' ? 'default' : 'outline'}
                            onClick={() => setMeasurementUnit('m')}
                            className={`flex-1 font-paragraph ${measurementUnit === 'm' ? 'bg-[#2C3E50] text-[#FFFFFF]' : 'border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#FFFFFF]'}`}
                          >
                            Meters (m)
                          </Button>
                          <Button
                            type="button"
                            variant={measurementUnit === 'ft' ? 'default' : 'outline'}
                            onClick={() => setMeasurementUnit('ft')}
                            className={`flex-1 font-paragraph ${measurementUnit === 'ft' ? 'bg-[#2C3E50] text-[#FFFFFF]' : 'border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#FFFFFF]'}`}
                          >
                            Feet (ft)
                          </Button>
                        </div>
                      </div>

                      {/* Dimensions or Area Input */}
                      {inputType === 'dimensions' ? (
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="length" className="font-paragraph text-base text-[#333333] mb-2 block">
                              Length ({measurementUnit === 'm' ? 'm' : 'ft'}) *
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
                            <Label htmlFor="width" className="font-paragraph text-base text-[#333333] mb-2 block">
                              Width ({measurementUnit === 'm' ? 'm' : 'ft'}) *
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
                          <Label htmlFor="area" className="font-paragraph text-base text-[#333333] mb-2 block">
                            Total Area ({measurementUnit === 'm' ? 'm²' : 'ft²'}) *
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
                    </>
                  )}

                  {/* Cement-based inputs */}
                  {currentProduct?.calculationType === 'cement' && (
                    <>
                      <div>
                        <Label htmlFor="cementBags" className="font-paragraph text-base text-[#333333] mb-2 block">
                          Number of Cement Bags (50kg each) *
                        </Label>
                        <Input
                          id="cementBags"
                          type="number"
                          step="1"
                          min="0"
                          value={cementBags}
                          onChange={(e) => setCementBags(e.target.value)}
                          placeholder="0"
                          className="font-paragraph"
                        />
                      </div>
                      <div>
                        <Label htmlFor="dosage" className="font-paragraph text-base text-[#333333] mb-2 block">
                          Dosage (% per cement bag) *
                        </Label>
                        <Input
                          id="dosage"
                          type="number"
                          step="0.1"
                          min="0.5"
                          max="2"
                          value={dosagePercent}
                          onChange={(e) => setDosagePercent(e.target.value)}
                          placeholder="0.8 - 2.0"
                          className="font-paragraph"
                        />
                        <p className="text-xs text-[#666] mt-1">
                          Recommended: {currentProduct.coverageRate}% (0.8% - 2.0% range)
                        </p>
                      </div>
                    </>
                  )}

                  {/* Running length inputs */}
                  {currentProduct?.calculationType === 'running-length' && (
                    <>
                      <div>
                        <Label className="font-paragraph text-base text-[#333333] mb-3 block">
                          Units
                        </Label>
                        <div className="flex gap-4">
                          <Button
                            type="button"
                            variant={measurementUnit === 'm' ? 'default' : 'outline'}
                            onClick={() => setMeasurementUnit('m')}
                            className={`flex-1 font-paragraph ${measurementUnit === 'm' ? 'bg-[#2C3E50] text-[#FFFFFF]' : 'border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#FFFFFF]'}`}
                          >
                            Meters (m)
                          </Button>
                          <Button
                            type="button"
                            variant={measurementUnit === 'ft' ? 'default' : 'outline'}
                            onClick={() => setMeasurementUnit('ft')}
                            className={`flex-1 font-paragraph ${measurementUnit === 'ft' ? 'bg-[#2C3E50] text-[#FFFFFF]' : 'border-2 border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#FFFFFF]'}`}
                          >
                            Feet (ft)
                          </Button>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="runningLength" className="font-paragraph text-base text-[#333333] mb-2 block">
                          Running Length ({measurementUnit === 'm' ? 'm' : 'ft'}) *
                        </Label>
                        <Input
                          id="runningLength"
                          type="number"
                          step="0.01"
                          min="0"
                          value={runningLength}
                          onChange={(e) => setRunningLength(e.target.value)}
                          placeholder="0.00"
                          className="font-paragraph"
                        />
                      </div>
                    </>
                  )}



                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button
                      onClick={calculateMaterial}
                      disabled={!currentProduct}
                      className="flex-1 bg-[#2C3E50] hover:bg-[#2C3E50]/90 text-[#FFFFFF] font-paragraph py-6 disabled:opacity-50"
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
                    {/* Area display for area-based */}
                    {result.calculationType === 'area' && result.area && (
                      <div className="bg-[#FFFFFF]/10 rounded-sm p-6">
                        <p className="font-paragraph text-sm text-[#FFFFFF]/80 mb-2">
                          Total Area
                        </p>
                        <p className="font-heading text-4xl font-bold text-[#B8A06A]" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem' }}>
                          {result.area} m²
                        </p>
                        <p className="font-paragraph text-sm text-[#FFFFFF]/70 mt-1">
                          {Math.round(result.area * 10.7639 * 100) / 100} ft²
                        </p>
                      </div>
                    )}

                    {/* Cement bags for cement-based */}
                    {result.calculationType === 'cement' && result.cementBags && (
                      <div className="bg-[#FFFFFF]/10 rounded-sm p-6">
                        <p className="font-paragraph text-sm text-[#FFFFFF]/80 mb-2">
                          Cement Bags
                        </p>
                        <p className="font-heading text-4xl font-bold text-[#B8A06A]">
                          {result.cementBags} bags
                        </p>
                        <p className="font-paragraph text-sm text-[#FFFFFF]/70 mt-1">
                          {result.cementBags * 50} kg total cement
                        </p>
                      </div>
                    )}

                    {/* Running length for running-length based */}
                    {result.calculationType === 'running-length' && result.runningLength && (
                      <div className="bg-[#FFFFFF]/10 rounded-sm p-6">
                        <p className="font-paragraph text-sm text-[#FFFFFF]/80 mb-2">
                          Running Length
                        </p>
                        <p className="font-heading text-4xl font-bold text-[#B8A06A]">
                          {result.runningLength} m
                        </p>
                        <p className="font-paragraph text-sm text-[#FFFFFF]/70 mt-1">
                          {Math.round(result.runningLength * 3.28084 * 100) / 100} ft
                        </p>
                      </div>
                    )}

                    {/* Material amount */}
                    <div className="bg-[#FFFFFF]/10 rounded-sm p-6">
                      <p className="font-paragraph text-sm text-[#FFFFFF]/80 mb-2">
                        Required Material
                      </p>
                      <p className="font-heading text-4xl font-bold text-[#B8A06A]">
                        {result.materialAmount} {result.unit}
                      </p>
                      {result.mixedPackaging && (
                        <div className="mt-3 text-sm text-[#FFFFFF]/70">
                          <p>Powder: {result.mixedPackaging.powder} kg</p>
                          <p>Liquid: {result.mixedPackaging.liquid} L</p>
                        </div>
                      )}
                    </div>

                    {/* Containers/Bags */}
                    <div className="bg-[#FFFFFF]/10 rounded-sm p-6">
                      <div className="flex items-center gap-3 mb-2">
                        {result.isLiquid || result.calculationType === 'cement' ? (
                          <Droplet className="h-5 w-5 text-[#FFFFFF]/80" />
                        ) : result.calculationType === 'running-length' ? (
                          <Ruler className="h-5 w-5 text-[#FFFFFF]/80" />
                        ) : (
                          <Package className="h-5 w-5 text-[#FFFFFF]/80" />
                        )}
                        <p className="font-paragraph text-sm text-[#FFFFFF]/80">
                          {result.isLiquid || result.calculationType === 'cement'
                            ? `Containers Required (${result.containerSize}${result.unit} each)` 
                            : `Bags Required (${result.containerSize}kg each)`}
                        </p>
                      </div>
                      <p className="font-heading text-4xl font-bold text-[#B8A06A]">
                        {result.containers} {result.isLiquid || result.calculationType === 'cement' ? 'containers' : 'bags'}
                      </p>
                      {currentProduct?.productName === 'CREED 2K' && (
                        <p className="text-xs text-[#FFFFFF]/70 mt-2">
                          Mix: 15kg packs (10kg powder + 5L liquid) and/or 3kg packs (2kg powder + 1L liquid)
                        </p>
                      )}
                    </div>


                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <Calculator className="w-16 h-16 text-[#FFFFFF]/30 mb-6" strokeWidth={1.5} />
                    <p className="font-paragraph text-base text-[#FFFFFF]/70">
                      Select a product and enter project details to calculate material requirements
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