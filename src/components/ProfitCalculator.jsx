import React, { useState } from 'react';
import GlassCard from './GlassCard';

const ProfitCalculator = () => {
    const [revenue, setRevenue] = useState(50000); // Default $50k

    // Logic:
    // Traditional Future = Revenue * 1.1 (10% growth)
    // AI Future = Revenue * 1.4 (40% growth)
    // Gap = AI Future - Traditional Future

    const traditionalGrowth = 1.1;
    const aiGrowth = 1.4;

    const traditionalFuture = Math.round(revenue * traditionalGrowth);
    const aiFuture = Math.round(revenue * aiGrowth);
    const gap = aiFuture - traditionalFuture;

    const formatCurrency = (val) => {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
    };

    return (
        <GlassCard className="w-full max-w-4xl mx-auto p-8 border-gold/20">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">The Cost of Inaction</h2>
                <p className="text-gray-400">See what you're leaving on the table every month.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Input Section */}
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Current Monthly Revenue</label>
                        <div className="text-3xl font-bold text-white mb-4">{formatCurrency(revenue)}</div>
                        <input
                            type="range"
                            min="5000"
                            max="200000"
                            step="1000"
                            value={revenue}
                            onChange={(e) => setRevenue(Number(e.target.value))}
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-gold hover:accent-gold-light"
                            style={{
                                background: `linear-gradient(to right, #D4AF37 0%, #D4AF37 ${(revenue - 5000) / (200000 - 5000) * 100}%, #374151 ${(revenue - 5000) / (200000 - 5000) * 100}%, #374151 100%)`
                            }}
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>$5k</span>
                            <span>$200k+</span>
                        </div>
                    </div>
                </div>

                {/* Results Section */}
                <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-sm text-gray-400">Traditional Growth (12mo)</div>
                        <div className="text-xl font-semibold text-white">{formatCurrency(traditionalFuture)}</div>
                    </div>

                    <div className="p-4 rounded-xl bg-gold/10 border border-gold/30 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gold/5 animate-pulse"></div>
                        <div className="relative z-10">
                            <div className="text-sm text-gold">AI-Accelerated Growth (12mo)</div>
                            <div className="text-2xl font-bold text-white">{formatCurrency(aiFuture)}</div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                        <div className="text-sm text-gray-400">The "Opportunity Gap"</div>
                        <div className="text-3xl font-bold text-gold">{formatCurrency(gap)}</div>
                        <p className="text-xs text-gray-500 mt-1">Additional revenue potential per month</p>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};

export default ProfitCalculator;
