import React, { useState, useEffect } from 'react';
import { X, Check, ChevronRight, ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const QuizModal = ({ isOpen, onClose }) => {
    const [step, setStep] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [answers, setAnswers] = useState({});
    const [contactInfo, setContactInfo] = useState({ email: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setStep(0);
            setFirstName('');
            setAnswers({});
            setContactInfo({ email: '' });
            setIsSubmitting(false);
            setIsSuccess(false);
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const questions = [
        // Step 1: The Vision (Goal Identification)
        {
            id: 'vision',
            question: `Hi ${firstName}. Where do you want your business to be in 12 months?`,
            options: [
                "Generating consistent, passive income streams.",
                "Scaling my current operations exponentially.",
                "Freeing up my time to focus on strategy."
            ]
        },
        // Step 2: The Reality (Bottleneck Identification)
        {
            id: 'bottleneck',
            question: "What is your single biggest bottleneck preventing that growth right now?",
            options: [
                "Time-consuming manual tasks/operations.",
                "Inconsistent lead generation and sales.",
                "Lack of expertise to implement new systems."
            ]
        },
        // Step 3: The Investment (Qualifying Financial Capacity)
        {
            id: 'revenue',
            question: "What is your approximate current monthly revenue?",
            options: [
                "Under $5k (Starting up)",
                "$5k - $15k (Growing)",
                "$15k - $50k (Scaling)",
                "$50k+ (Established)"
            ]
        }
    ];

    const handleNameSubmit = (e) => {
        e.preventDefault();
        if (firstName.trim()) {
            setStep(1);
        }
    };

    const handleSelect = (questionId, option) => {
        setAnswers(prev => ({ ...prev, [questionId]: option }));
        if (step < questions.length) {
            setTimeout(() => setStep(prev => prev + 1), 300); // Small delay for visual feedback
        } else {
            setStep('contact');
        }
    };

    const handleFinalSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const leadDataObject = {
            name: firstName,
            email: contactInfo.email,
            answers: answers
        };

        console.log("IQairus Lead Data:", leadDataObject);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const totalSteps = questions.length;
    const progress = Math.min((step / totalSteps) * 100, 100);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300">
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
                <X size={24} />
            </button>

            <div className="w-full max-w-lg">
                {/* Progress Bar (Only show during questions) */}
                {step > 0 && step <= totalSteps && !isSuccess && (
                    <div className="mb-8">
                        <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gold transition-all duration-500 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        <div className="mt-2 text-right text-xs text-gold font-medium">
                            Step {step} of {totalSteps}
                        </div>
                    </div>
                )}

                <div className="min-h-[400px] flex flex-col justify-center">
                    {/* Step 0: Name Input */}
                    {step === 0 && (
                        <form onSubmit={handleNameSubmit} className="space-y-6 animate-slideUp">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold text-white">Let's start with the basics.</h2>
                                <p className="text-gray-400">What should we call you?</p>
                            </div>
                            <input
                                type="text"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Your First Name"
                                className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl text-white placeholder:text-gray-600 focus:border-gold focus:outline-none transition-colors"
                                autoFocus
                            />
                            <button
                                type="submit"
                                disabled={!firstName.trim()}
                                className="group flex items-center gap-2 text-gold font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:text-gold-light transition-colors"
                            >
                                Continue <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    )}

                    {/* Steps 1-3: Questions */}
                    {step > 0 && step <= totalSteps && (
                        <div className="space-y-8 animate-slideUp" key={step}>
                            <h2 className="text-2xl font-semibold text-white leading-relaxed">
                                {questions[step - 1].question}
                            </h2>
                            <div className="space-y-3">
                                {questions[step - 1].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelect(questions[step - 1].id, option)}
                                        className="w-full text-left p-5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/50 transition-all duration-200 group"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-200 group-hover:text-white">{option}</span>
                                            <ChevronRight className="text-gray-500 group-hover:text-gold opacity-0 group-hover:opacity-100 transition-all" size={20} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 'contact': Email Input */}
                    {step === 'contact' && !isSuccess && (
                        <form onSubmit={handleFinalSubmit} className="space-y-6 animate-slideUp">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold text-white">Last step, {firstName}.</h2>
                                <p className="text-gray-400">Where should we send your custom AI roadmap?</p>
                            </div>
                            <input
                                type="email"
                                required
                                value={contactInfo.email}
                                onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                                placeholder="name@company.com"
                                className="w-full bg-transparent border-b-2 border-white/20 py-4 text-2xl text-white placeholder:text-gray-600 focus:border-gold focus:outline-none transition-colors"
                                autoFocus
                            />
                            <button
                                type="submit"
                                disabled={isSubmitting || !contactInfo.email}
                                className="w-full py-4 bg-gold text-black font-bold rounded-full hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <span className="animate-pulse">Analyzing...</span>
                                ) : (
                                    <>Get My Roadmap <ArrowRight size={20} /></>
                                )}
                            </button>
                        </form>
                    )}

                    {/* Success State */}
                    {isSuccess && (
                        <div className="text-center space-y-6 animate-slideUp">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-500">
                                <Check size={40} />
                            </div>
                            <h2 className="text-3xl font-bold text-white">You're all set!</h2>
                            <p className="text-gray-400 max-w-md mx-auto">
                                We've received your details. One of our AI strategists will analyze your bottleneck and reach out to <strong>{contactInfo.email}</strong> shortly.
                            </p>
                            <button
                                onClick={onClose}
                                className="text-gold hover:text-gold-light font-medium mt-4"
                            >
                                Return to Homepage
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizModal;
