import React from 'react';

const Biography = () => {
    return (
        <div className="min-h-screen flex flex-col items-center py-12 px-4 md:px-8 lg:px-20">
            <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
                Biography of Suryakant Tripathi Nirala
            </h1>

            <div className="w-full max-w-4xl space-y-16">
                {/* Existing Biography Content */}
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Early Life</h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                        Suryakant Tripathi Nirala was born on February 21, 1896, in Medinipur, Bengal. His original name was Suryakant Tripathi, but he later adopted the pen name "Nirala," which means "unique." Raised in a strict environment, he lost his mother at an early age. Despite these hardships, he educated himself and became proficient in Hindi, Sanskrit, Bengali, and English.
                    </p>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Literary Career</h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                        Nirala was a major figure in the Chhayavaad (shadowism) movement, a form of romanticism in Hindi literature. His literary career marked a significant shift in Hindi poetry, introducing free verse and experimenting with form and style. Some of his celebrated works include the poems "Ram Ki Shakti Puja" and "Juhi Ki Kali." He also wrote novels and short stories with deep emotional intensity and vivid imagery.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600 mt-4">
                        Nirala’s writing addressed social issues such as inequality, poverty, and exploitation, making him a voice for the oppressed.
                    </p>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Innovative Style and Influence</h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                        Nirala's poetry broke away from traditional meter and rhyme in Hindi literature. He pioneered free verse, allowing him to explore new emotional depths and creative freedom. His poems often highlighted social criticism and human suffering, but also celebrated the beauty of nature and human resilience. His rebellious style influenced future generations, making him one of the foundational figures in modern Hindi literature.
                    </p>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Personal Struggles</h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                        Nirala’s life was marked by tragedy and hardship. He lost his wife early in their marriage, and later his daughter also passed away. These personal losses deeply affected Nirala and his writing. His empathy for human suffering became even more evident in his work, which channeled his pain into powerful expressions of poetry and prose.
                    </p>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Legacy</h2>
                    <p className="text-lg leading-relaxed text-gray-600">
                        Suryakant Tripathi Nirala’s contributions to Hindi literature have earned him a lasting place in its history. His fearless experimentation with poetic form and deep concern for social justice continue to inspire readers and writers alike. His works, such as "Kulli Bhat" and "Ram Ki Shakti Puja," remain essential reading in Hindi literature.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-600 mt-4">
                        Nirala's legacy as a poet and a visionary remains strong, as his works continue to influence modern Hindi literature and reflect the complexities of the human experience.
                    </p>
                </section>

                {/* YouTube Video Section
                <section className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Watch: A Documentary on Nirala's Life</h2>

                    Responsive YouTube Embed
                    <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
                        <iframe 
                            className="w-full h-full rounded-xl" 
                            src="https://www.youtube.com/embed/pbUahDiJ7pE?si=FO-WSf5HxPG9qlk1"
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </section> */}
            </div>
        </div>
    );
};

export default Biography;
