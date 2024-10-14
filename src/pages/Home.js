import React from 'react';
import picture1 from '../assets/picture1.jpg';

const Home = () => {
    return (
        <div className="home min-h-screen flex flex-col items-center py-10 px-6 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#6B4F4F] mb-10 leading-tight">
                Suryakant Tripathi Nirala
            </h1>
            <p className="text-xl md:text-2xl text-[#8B5D33] mb-12 max-w-[90%] lg:max-w-[50%] leading-relaxed">
            “मैं ही वसन्त का अग्रदूत”

            </p>
            <img 
                src={picture1}
                alt="Suryakant Tripathi Nirala" 
                className="w-full max-w-lg h-auto rounded-lg shadow-lg mb-12"
            />
            <div className="max-w-[90%] lg:max-w-[50%] space-y-8">
                <p className="text-lg md:text-xl lg:text-2xl text-[#5D4037] leading-relaxed">
                    Suryakant Tripathi (21 February 1899 – 15 October 1961) was an Indian poet, writer, composer, and sketch artist who wrote in Hindi. He is considered one of the four major pillars of the Chhayavad period in Hindi literature. He is renowned with the epithet Mahāprāṇ and his pen name Nirālā.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-[#5D4037] leading-relaxed">
                    He possessed a mastery of traditional poetic meters, with many of his compositions adhering to these forms. Additionally, he revolutionized Hindi poetry by pioneering the use of free verse, becoming the first Hindi poet to do so. He demonstrated to readers that poetry could retain its poetic essence and rhythm even without rhyming lines.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-[#5D4037] leading-relaxed">
                    He experienced a tumultuous life, marred by family losses and societal hardships. His writings, marked by a deep affinity with nature and a critique of social injustices, established him as a prominent figure in Chhayavadi and subsequent poetic movements. His dedication to social reform and literary creativity highlights his significant impact on modern Hindi literature.
                </p>
            </div>
            {/* Achievements Section */}
            <div className=" w-full py-12 px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl font-extrabold text-[#6B4F4F] mb-10">Achievements</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="achievement-card p-6 bg-yellow-100 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-[#8B5D33] mb-4">Pioneering Free Verse</h3>
                        <p className="text-md text-[#5D4037] leading-relaxed">
                            Nirala revolutionized Hindi poetry by introducing free verse, a groundbreaking style that deviated from traditional rhymes and meters. He proved that poetry could maintain its musicality and rhythm without adhering to strict rules. His use of free verse allowed deeper emotional expression and greater creative freedom, influencing generations of poets who followed his innovative path.
                        </p>
                    </div>

                    <div className="achievement-card p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-[#8B5D33] mb-4">Chhayavad Movement</h3>
                        <p className="text-md text-[#5D4037] leading-relaxed">
                            As one of the pioneers of the Chhayavad movement, Nirala played a central role in this Hindi literary renaissance. His poetry delved deep into themes of personal introspection, emotional depth, and the beauty of nature. Chhayavad marked a shift from earlier, more didactic styles to a focus on subjectivity, romanticism, and emotional expression, which Nirala embodied masterfully.
                        </p>
                        <p className="text-md text-[#5D4037] leading-relaxed mt-4">
                            His work set a new standard in Hindi poetry, blending classical elements with modern sensibilities. He helped shape this literary movement into a voice for the emerging modern Hindi reader.
                        </p>
                    </div>

                    <div className="achievement-card p-6 bg-yellow-100 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-[#8B5D33] mb-4">Ram Ki Shakti Puja</h3>
                        <p className="text-md text-[#5D4037] leading-relaxed">
                            "Ram Ki Shakti Puja," one of Nirala's most famous poems, is a timeless work that blends mythological narrative with deep philosophical musings. The poem is a spiritual exploration of Lord Rama's struggle, capturing not only the divine story but also the inner conflicts of humanity. Through powerful imagery and moving prose, Nirala crafted a literary masterpiece that remains a cornerstone in Hindi poetry.
                        </p>
                        <p className="text-md text-[#5D4037] leading-relaxed mt-4">
                            This work exemplifies his ability to merge Indian epics with modern-day concerns, making ancient stories resonate with contemporary audiences.
                        </p>
                    </div>

                    <div className="achievement-card p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-[#8B5D33] mb-4">Juhi Ki Kali</h3>
                        <p className="text-md text-[#5D4037] leading-relaxed">
                            "Juhi Ki Kali" is another of Nirala’s celebrated works, renowned for its delicate and picturesque portrayal of a blooming jasmine bud (Juhi). Through this small, seemingly simple natural event, Nirala explores themes of life, beauty, and existential reflection. His use of rich imagery and sensitivity to nature makes this poem a beloved classic.
                        </p>
                        <p className="text-md text-[#5D4037] leading-relaxed mt-4">
                            The poem’s timeless quality and emotional depth make it one of the most recognized and quoted works in Hindi literature.
                        </p>
                    </div>

                    <div className="achievement-card p-6 bg-yellow-100 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-[#8B5D33] mb-4">Social Reformer</h3>
                        <p className="text-md text-[#5D4037] leading-relaxed">
                            Nirala was not only a poet but also a powerful voice for social reform. He used his writing as a platform to criticize social inequalities, especially those faced by the poor and the marginalized. His poems and essays called for an end to exploitation, caste discrimination, and poverty, often using sharp satire and biting commentary to expose the injustices of his time.
                        </p>
                        <p className="text-md text-[#5D4037] leading-relaxed mt-4">
                            His commitment to speaking truth to power earned him both admiration and criticism, solidifying his place as a socially conscious and influential figure in Hindi literature.
                        </p>
                    </div>

                    <div className="achievement-card p-6 bg-white rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-[#8B5D33] mb-4">Literary Influence</h3>
                        <p className="text-md text-[#5D4037] leading-relaxed">
                            Nirala’s fearless experimentation with poetic form, his revolutionary use of free verse, and his deep engagement with societal issues left an indelible mark on modern Hindi literature. His influence can be seen in the works of countless poets and writers who followed, as he pushed the boundaries of what Hindi poetry could achieve.
                        </p>
                        <p className="text-md text-[#5D4037] leading-relaxed mt-4">
                            Nirala’s legacy is a testament to the power of creativity and courage in literature. He continues to inspire new generations of writers who look to him as a trailblazer and a voice for the voiceless.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
