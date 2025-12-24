import { useEffect, useState, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
    SiJavascript,
    SiPython,
    SiTypescript,
    SiNodedotjs,
    SiExpress,
    SiJsonwebtokens,
    SiSqlite,
    SiPostgresql,
    SiMongodb,
    SiRedis,
    SiDotenv,
    SiHtml5,
    SiCss3,
    SiReact,
    SiTailwindcss,
    SiDocker,
    SiKubernetes,
    SiYaml,
    SiGooglecloud,
    SiScikitlearn,
    SiNumpy,
    SiPandas,
    SiTensorflow,
    SiKeras,
    SiKaggle,
    SiHuggingface,
} from "react-icons/si";
import {
    FaJava,
    FaCloud,
    FaRobot,
    FaCodeBranch,
    FaServer,
    FaChartLine,
    FaChartBar,
} from "react-icons/fa";

/* =========================
   Animaciones reutilizables
   (FIX: sin animar filter/blur para evitar stacking bugs)
========================= */

const Reveal = ({
                    children,
                    delay = 0,
                    y = 16,
                    amount = 0.25,
                }: {
    children: ReactNode;
    delay?: number;
    y?: number;
    amount?: number;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount }}
            transition={{ duration: 0.65, ease: "easeOut", delay }}
        >
            {children}
        </motion.div>
    );
};

const Stagger = ({
                     children,
                     amount = 0.2,
                 }: {
    children: ReactNode;
    amount?: number;
}) => (
    <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount }}
        variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
        }}
    >
        {children}
    </motion.div>
);

const StaggerItem = ({ children }: { children: ReactNode }) => (
    <motion.div
        variants={{
            hidden: { opacity: 0, y: 14, scale: 0.985 },
            show: { opacity: 1, y: 0, scale: 1 },
        }}
        transition={{ duration: 0.55, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

/* =========================
   Microchip
========================= */

const Microchip = () => {
    return (
        <div className="flex items-center justify-center p-10">
            <svg
                width="300"
                height="150"
                viewBox="0 0 200 100"
                className="mx-auto select-none"
                xmlns="http://www.w3.org/2000/svg"
                shapeRendering="geometricPrecision"
            >
                <defs>
                    <linearGradient
                        id="pinMetalGradientDetailed"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="#4a4a4a" />
                        <stop offset="15%" stopColor="#8e8e8e" />
                        <stop offset="40%" stopColor="#d0d0d0" />
                        <stop offset="60%" stopColor="#ffffff" />
                        <stop offset="85%" stopColor="#d0d0d0" />
                        <stop offset="100%" stopColor="#e0e0e0" />
                    </linearGradient>

                    <linearGradient id="bodyGradientSmooth" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#1e1e1e" />
                        <stop offset="50%" stopColor="#141414" />
                        <stop offset="100%" stopColor="#0a0a0a" />
                    </linearGradient>

                    <filter id="glowSubtle" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="0.8" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                </defs>

                {/* --- PINES --- */}
                <g id="top-pins">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <rect
                            key={`top-${i}`}
                            x={45 + i * 22}
                            y={10}
                            width="8"
                            height="15"
                            fill="url(#pinMetalGradientDetailed)"
                            rx="1"
                        />
                    ))}
                </g>

                <g id="bottom-pins">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <rect
                            key={`bottom-${i}`}
                            x={45 + i * 22}
                            y={75}
                            width="8"
                            height="15"
                            fill="url(#pinMetalGradientDetailed)"
                            rx="1"
                        />
                    ))}
                </g>

                <g id="left-pins">
                    <rect
                        x={15}
                        y={35}
                        width="15"
                        height="8"
                        fill="url(#pinMetalGradientDetailed)"
                        rx="1"
                    />
                    <rect
                        x={15}
                        y={57}
                        width="15"
                        height="8"
                        fill="url(#pinMetalGradientDetailed)"
                        rx="1"
                    />
                </g>

                <g id="right-pins">
                    <rect
                        x={170}
                        y={35}
                        width="15"
                        height="8"
                        fill="url(#pinMetalGradientDetailed)"
                        rx="1"
                    />
                    <rect
                        x={170}
                        y={57}
                        width="15"
                        height="8"
                        fill="url(#pinMetalGradientDetailed)"
                        rx="1"
                    />
                </g>

                <rect
                    x="25"
                    y="20"
                    width="150"
                    height="60"
                    rx="8"
                    fill="url(#bodyGradientSmooth)"
                    stroke="#2a2a2a"
                    strokeWidth="0.5"
                    filter="url(#glowSubtle)"
                />
            </svg>
        </div>
    );
};

/* =========================
   Typewriter (con scroll)
========================= */

const TypewriterEffect = ({ text, start }: { text: string; start: boolean }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isGenerating, setIsGenerating] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!start) {
            setDisplayedText("");
            setIsGenerating(true);
            setCurrentIndex(0);
        }
    }, [start]);

    useEffect(() => {
        if (!start) return;

        const generatingTimer = setTimeout(() => {
            setIsGenerating(false);
            setCurrentIndex(0);
            setDisplayedText("");
        }, 3000);

        return () => clearTimeout(generatingTimer);
    }, [start]);

    useEffect(() => {
        if (!start) return;
        if (isGenerating) return;

        if (currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [start, isGenerating, currentIndex, text]);

    return (
        <div className="relative">
            {isGenerating ? (
                <motion.span
                    className="text-white"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    Generating description
                </motion.span>
            ) : (
                <span className="text-white">
          {displayedText}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                        className="inline-block w-1 h-5 bg-white ml-1"
                    />
        </span>
            )}
        </div>
    );
};

/* =========================
   Tech Icons
========================= */

const techIcons: { [key: string]: React.ComponentType<{ className?: string }> } =
    {
        JavaScript: SiJavascript,
        Java: FaJava,
        Python: SiPython,
        TypeScript: SiTypescript,
        NodeJS: SiNodedotjs,
        Express: SiExpress,
        JWT: SiJsonwebtokens,
        "SQL Lite": SiSqlite,
        PostgreSQL: SiPostgresql,
        Mongo: SiMongodb,
        Redis: SiRedis,
        Axios: FaServer,
        Bcrypt: FaRobot,
        Dotenv: SiDotenv,
        HTML: SiHtml5,
        CSS: SiCss3,
        React: SiReact,
        Tailwindcss: SiTailwindcss,
        Docker: SiDocker,
        "CI/CD": FaCodeBranch,
        Kubernetes: SiKubernetes,
        YAML: SiYaml,
        AWS: FaCloud,
        "Google Cloud": SiGooglecloud,
        ScikitLearn: SiScikitlearn,
        Numpy: SiNumpy,
        Pandas: SiPandas,
        Matplotlib: FaChartLine,
        Seaborn: FaChartBar,
        Tensorflow: SiTensorflow,
        Keras: SiKeras,
        Kaggle: SiKaggle,
        HuggingFace: SiHuggingface,
    };

const TechIcon = ({ name }: { name: string }) => {
    const IconComponent = techIcons[name];

    return (
        <div className="flex flex-col items-center gap-2 group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-white group-hover:scale-110 group-hover:border-gray-600 transition-all duration-200">
                <IconComponent className="w-10 h-10 md:w-12 md:h-12" />
            </div>
            <span className="text-xs md:text-sm text-gray-400 text-center max-w-[80px] md:max-w-[100px] break-words">
        {name}
      </span>
        </div>
    );
};

/* =========================
   Página principal
========================= */

export default function PortfolioView() {
    const [isMobile, setIsMobile] = useState(false);
    const [startTyping, setStartTyping] = useState(false);

    const profileImageRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const roleRef = useRef<HTMLParagraphElement>(null);
    const contactBtnRef = useRef<HTMLButtonElement>(null);
    const resumeBtnRef = useRef<HTMLButtonElement>(null);
    const projectsBtnRef = useRef<HTMLButtonElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const buttonsContainerRef = useRef<HTMLDivElement>(null);
    const separatorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const el = descriptionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartTyping(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.35 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const randomDescription =
        "Passionate software engineer with expertise in modern web technologies. Specializing in full-stack development and AI integration, I create innovative solutions that combine elegant design with robust functionality.";

    const techStack = {
        Backend: [
            "JavaScript",
            "TypeScript",
            "Java",
            "Python",
            "NodeJS",
            "Express",
            "JWT",
            "Axios",
            "Bcrypt",
            "Dotenv",
        ],
        Frontend: ["HTML", "CSS", "React", "Tailwindcss"],
        Databases: ["SQL Lite", "PostgreSQL", "Mongo", "Redis"],
        DevOps: ["Docker", "CI/CD", "Kubernetes", "YAML"],
        Cloud: ["AWS", "Google Cloud"],
        AI: [
            "ScikitLearn",
            "Numpy",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Tensorflow",
            "Keras",
            "Kaggle",
            "HuggingFace",
        ],
    };

    const leftColumn = ["Backend", "Frontend", "Databases"] as const;
    const rightColumn = ["DevOps", "Cloud", "AI"] as const;

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 md:px-8 py-8 md:py-20">
                {/* Top */}
                <div className="flex flex-col items-center mb-0.5">
                    <div
                        ref={profileImageRef}
                        className="relative mb-6 md:mb-8"
                        style={{ width: "200px", height: "200px" }}
                    >
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-gray-700"></div>
                        </div>
                    </div>

                    <div className="text-center mb-6 md:mb-8">
                        <h1 ref={nameRef} className="text-3xl md:text-6xl font-bold mb-2 tracking-tight">
                            SEBASTIAN GALINDO ZARAGOZA
                        </h1>
                        <p
                            ref={roleRef}
                            className="text-lg md:text-2xl text-gray-400 font-medium mb-6 md:mb-8"
                        >
                            Software Engineer
                        </p>

                        <div
                            ref={buttonsContainerRef}
                            className={`flex gap-4 mb-6 md:mb-8 ${
                                isMobile ? "flex-col w-full items-center" : "flex-row justify-center"
                            }`}
                        >
                            {/* GitHub */}
                            <button
                                ref={contactBtnRef}
                                className="
                                  px-7 py-3 rounded-xl
                                  bg-gradient-to-br from-gray-900/50 to-black/50
                                  backdrop-blur-sm
                                  border border-gray-800
                                  text-white font-medium
                                  hover:border-gray-600
                                  hover:bg-gray-900/60
                                  hover:-translate-y-0.5
                                  transition-all duration-200
                                  whitespace-nowrap w-full md:w-auto
    "
                            >
                                GitHub
                            </button>

                            {/* CV */}
                            <button
                                ref={resumeBtnRef}
                                className="
                                  px-7 py-3 rounded-xl
                                  bg-gradient-to-br from-gray-900/50 to-black/50
                                  backdrop-blur-sm
                                  border border-gray-800
                                  text-white font-medium
                                  hover:border-gray-600
                                  hover:bg-gray-900/60
                                  hover:-translate-y-0.5
                                  transition-all duration-200
                                  whitespace-nowrap w-full md:w-auto
    "
                            >
                                CV
                            </button>

                            {/* LinkedIn */}
                            <button
                                ref={projectsBtnRef}
                                className="
                                  px-7 py-3 rounded-xl
                                  bg-gradient-to-br from-gray-900/50 to-black/50
                                  backdrop-blur-sm
                                  border border-gray-800
                                  text-white font-medium
                                  hover:border-gray-600
                                  hover:bg-gray-900/60
                                  hover:-translate-y-0.5
                                  transition-all duration-200
                                  whitespace-nowrap w-full md:w-auto
                                "
                            >
                                LinkedIn
                            </button>
                        </div>


                    </div>
                </div>

                {/* Microchip (encima del separador) */}
                <motion.div
                    className="flex justify-center -mb-28 relative z-50 pointer-events-none will-change-transform"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                    <Microchip />
                </motion.div>

                {/* Separador (debajo del microchip) */}
                <Reveal delay={0} y={10}>
                    <div
                        ref={separatorRef}
                        className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-24 relative z-0"
                    />
                </Reveal>

                {/* Description */}
                <Reveal>
                    <div className="mb-16">
                        <div className="max-w-4xl mx-auto">
                            <div
                                ref={descriptionRef}
                                className="border border-gray-800 rounded-xl p-6 md:p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-2 h-2 rounded-full bg-white mt-2 animate-pulse"></div>
                                    <div className="flex-1">
                                        <TypewriterEffect text={randomDescription} start={startTyping} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>

                {/* Separador */}
                <Reveal y={10} delay={0.03}>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16" />
                </Reveal>

                {/* Projects */}
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
                </Reveal>

                <Stagger>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                        <StaggerItem>
                            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/30 to-black/30 hover:border-gray-700 transition-colors">
                                <h3 className="text-2xl font-semibold mb-3">Title</h3>
                                <p className="text-gray-400 mb-4">Description</p>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 rounded-lg border border-gray-700 text-sm hover:border-gray-600 transition-colors">
                                        View
                                    </button>
                                    <button className="px-4 py-2 rounded-lg border border-gray-700 text-sm hover:border-gray-600 transition-colors">
                                        Code
                                    </button>
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/30 to-black/30">
                                <div className="w-full h-48 rounded-lg bg-gray-800 mb-4"></div>
                            </div>
                        </StaggerItem>
                    </div>
                </Stagger>

                {/* Separador */}
                <Reveal y={10}>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16" />
                </Reveal>

                {/* Tech Stack */}
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tech Stack</h2>
                </Reveal>

                <Stagger>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-16">
                        <div className="space-y-6 md:space-y-8">
                            {leftColumn.map((category) => (
                                <StaggerItem key={category}>
                                    <div className="border border-gray-800 rounded-xl p-6 md:p-8 bg-gradient-to-br from-gray-900/30 to-black/30">
                                        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
                                            {category}
                                        </h3>

                                        <Stagger amount={0.2}>
                                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                                {techStack[category].map((tech) => (
                                                    <StaggerItem key={tech}>
                                                        <TechIcon name={tech} />
                                                    </StaggerItem>
                                                ))}
                                            </div>
                                        </Stagger>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>

                        <div className="space-y-6 md:space-y-8">
                            {rightColumn.map((category) => (
                                <StaggerItem key={category}>
                                    <div className="border border-gray-800 rounded-xl p-6 md:p-8 bg-gradient-to-br from-gray-900/30 to-black/30">
                                        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
                                            {category}
                                        </h3>

                                        <Stagger amount={0.2}>
                                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                                {techStack[category].map((tech) => (
                                                    <StaggerItem key={tech}>
                                                        <TechIcon name={tech} />
                                                    </StaggerItem>
                                                ))}
                                            </div>
                                        </Stagger>
                                    </div>
                                </StaggerItem>
                            ))}
                        </div>
                    </div>
                </Stagger>

                {/* Separador */}
                <Reveal y={10}>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16" />
                </Reveal>

                {/* Contributions */}
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contributions</h2>
                </Reveal>

                <Stagger>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                        <StaggerItem>
                            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/30 to-black/30 hover:border-gray-700 transition-colors">
                                <h3 className="text-2xl font-semibold mb-3">Title</h3>
                                <p className="text-gray-400 mb-4">Description</p>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 rounded-lg border border-gray-700 text-sm hover:border-gray-600 transition-colors">
                                        View
                                    </button>
                                    <button className="px-4 py-2 rounded-lg border border-gray-700 text-sm hover:border-gray-600 transition-colors">
                                        Code
                                    </button>
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/30 to-black/30">
                                <div className="w-full h-48 rounded-lg bg-gray-800 mb-4"></div>
                            </div>
                        </StaggerItem>
                    </div>
                </Stagger>

                {/* Separador */}
                <Reveal y={10}>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16" />
                </Reveal>

                {/* Certificates */}
                <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certificates</h2>
                </Reveal>

                <Stagger>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                        <StaggerItem>
                            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/30 to-black/30 hover:border-gray-700 transition-colors">
                                <h3 className="text-2xl font-semibold mb-3">Title</h3>
                                <p className="text-gray-400 mb-4">Description</p>
                                <div className="flex gap-3">
                                    <button className="px-4 py-2 rounded-lg border border-gray-700 text-sm hover:border-gray-600 transition-colors">
                                        Download
                                    </button>
                                </div>
                            </div>
                        </StaggerItem>

                        <StaggerItem>
                            <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/30 to-black/30">
                                <div className="w-full h-48 rounded-lg bg-gray-800 mb-4"></div>
                            </div>
                        </StaggerItem>
                    </div>
                </Stagger>

                {/* Separador */}
                <Reveal y={10}>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16" />
                </Reveal>

                {/* Final CTA */}
                <Reveal>
                    <div className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's talk together</h2>

                        <div className="flex justify-center gap-4 mb-8">
                            <button className="px-4 py-2 rounded-lg border border-gray-700 text-sm hover:border-gray-600 transition-colors">
                                Email
                            </button>
                            <button className="px-4 py-2 rounded-lg border border-gray-700 text-sm hover:border-gray-600 transition-colors">
                                Phone Number
                            </button>
                        </div>

                        <div className="max-w-6xl mx-auto">
                            <div className="w-full h-48 rounded-lg bg-gray-800"></div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </div>
    );
}
