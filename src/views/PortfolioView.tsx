import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import {
    SiJavascript, SiPython, SiTypescript, SiNodedotjs, SiExpress,
    SiJsonwebtokens, SiSqlite, SiPostgresql, SiMongodb, SiRedis,
    SiDotenv, SiHtml5, SiCss3, SiReact, SiTailwindcss,
    SiDocker, SiKubernetes, SiYaml, SiGooglecloud,
    SiScikitlearn, SiNumpy, SiPandas, SiTensorflow, SiKeras, SiKaggle, SiHuggingface
} from "react-icons/si";
import {
    FaJava, FaCloud, FaRobot, FaCodeBranch, FaServer,
    FaChartLine, FaChartBar
} from "react-icons/fa";


// Componente del microchip profesional estilo Next.js con cubierta mejorada
const Microchip = ({ onPinPositions }: { onPinPositions: (positions: Map<string, { x: number; y: number }>) => void }) => {
    const chipRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (chipRef.current) {
            const rect = chipRef.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            // Posiciones de los pines - solo la mitad, más espaciados
            const pinSpacing = 16; // Espaciado mayor entre pines

            const positions = new Map<string, { x: number; y: number }>();

            // Pines superiores - solo 5 (reducidos de 9)
            for (let i = 0; i < 5; i++) {
                const x = centerX - 32 + (i * pinSpacing);
                const y = centerY - 60;
                positions.set(`top-${i}`, { x, y });
            }

            // Pines inferiores - solo 5 (reducidos de 9)
            for (let i = 0; i < 5; i++) {
                const x = centerX - 32 + (i * pinSpacing);
                const y = centerY + 60;
                positions.set(`bottom-${i}`, { x, y });
            }

            // Pines laterales - ajustados
            positions.set('left-0', { x: centerX - 60, y: centerY - 8 });
            positions.set('right-0', { x: centerX + 60, y: centerY - 8 });

            onPinPositions(positions);
        }
    }, [onPinPositions]);

    return (
        <div className="relative">
            <svg
                ref={chipRef}
                width="180"
                height="120"
                viewBox="0 0 120 80"
                className="mx-auto relative z-10"
                style={{ transform: "scale(1.5)" }}
            >
                <defs>
                    {/* Gradiente para el cuerpo del chip - más opaco */}
                    <linearGradient id="chipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0a0a0a" stopOpacity="1" />
                        <stop offset="50%" stopColor="#1a1a1a" stopOpacity="1" />
                        <stop offset="100%" stopColor="#0a0a0a" stopOpacity="1" />
                    </linearGradient>
                    {/* Gradiente para el panel central - más opaco */}
                    <linearGradient id="panelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1a1a1a" stopOpacity="1" />
                        <stop offset="50%" stopColor="#2a2a2a" stopOpacity="1" />
                        <stop offset="100%" stopColor="#1a1a1a" stopOpacity="1" />
                    </linearGradient>
                    {/* Gradiente para la cubierta superior - estilo Next.js */}
                    <linearGradient id="coverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3a3a3a" stopOpacity="0.9" />
                        <stop offset="30%" stopColor="#2a2a2a" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.6" />
                    </linearGradient>
                    {/* Sombra interna */}
                    <filter id="innerShadow">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
                        <feOffset dx="0" dy="1" result="offsetblur"/>
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.3"/>
                        </feComponentTransfer>
                        <feMerge>
                            <feMergeNode/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Cuerpo del microchip con gradiente y sombra - más opaco */}
                <rect
                    x="20"
                    y="25"
                    width="80"
                    height="30"
                    rx="4"
                    fill="url(#chipGradient)"
                    stroke="#222"
                    strokeWidth="1"
                    filter="url(#innerShadow)"
                />

                {/* Panel central con gradiente - más opaco */}
                <rect
                    x="30"
                    y="32"
                    width="60"
                    height="16"
                    rx="2"
                    fill="url(#panelGradient)"
                    opacity="1"
                />

                {/* Cubierta superior del microchip - estilo Next.js mejorado */}
                <rect
                    x="20"
                    y="25"
                    width="80"
                    height="12"
                    rx="4"
                    fill="url(#coverGradient)"
                    opacity="0.85"
                />

                {/* Borde superior de la cubierta para más profundidad */}
                <line
                    x1="20"
                    y1="25"
                    x2="100"
                    y2="25"
                    stroke="#4a4a4a"
                    strokeWidth="0.5"
                    opacity="0.6"
                />

                {/* Reflejo sutil en el panel */}
                <rect
                    x="30"
                    y="32"
                    width="60"
                    height="8"
                    rx="2"
                    fill="url(#panelGradient)"
                    opacity="0.4"
                />

                {/* Pines superiores - solo 5, más grandes y profesionales - más opacos */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <g key={`top-${i}`}>
                        {/* Base del pin */}
                        <rect
                            x={28 + i * 16}
                            y="20"
                            width="5"
                            height="10"
                            rx="1"
                            fill="#3a3a3a"
                            opacity="1"
                        />
                        {/* Parte superior del pin con gradiente */}
                        <rect
                            x={27 + i * 16}
                            y="18"
                            width="7"
                            height="5"
                            rx="1"
                            fill="#4a4a4a"
                            opacity="1"
                        />
                        {/* Highlight en el pin */}
                        <rect
                            x={28 + i * 16}
                            y="20"
                            width="5"
                            height="3"
                            rx="1"
                            fill="#5a5a5a"
                            opacity="0.6"
                        />
                    </g>
                ))}

                {/* Pines inferiores - solo 5, más grandes y profesionales - más opacos */}
                {Array.from({ length: 5 }).map((_, i) => (
                    <g key={`bottom-${i}`}>
                        {/* Base del pin */}
                        <rect
                            x={28 + i * 16}
                            y="50"
                            width="5"
                            height="10"
                            rx="1"
                            fill="#3a3a3a"
                            opacity="1"
                        />
                        {/* Parte inferior del pin con gradiente */}
                        <rect
                            x={27 + i * 16}
                            y="57"
                            width="7"
                            height="5"
                            rx="1"
                            fill="#4a4a4a"
                            opacity="1"
                        />
                        {/* Highlight en el pin */}
                        <rect
                            x={28 + i * 16}
                            y="50"
                            width="5"
                            height="3"
                            rx="1"
                            fill="#5a5a5a"
                            opacity="0.6"
                        />
                    </g>
                ))}

                {/* Pines laterales izquierdos - ajustados */}
                <g>
                    <rect x="18" y="36" width="5" height="10" rx="1" fill="#3a3a3a" opacity="1" />
                    <rect x="16" y="38" width="5" height="6" rx="1" fill="#4a4a4a" opacity="1" />
                    <rect x="18" y="36" width="5" height="3" rx="1" fill="#5a5a5a" opacity="0.6" />
                </g>

                {/* Pines laterales derechos - ajustados */}
                <g>
                    <rect x="97" y="36" width="5" height="10" rx="1" fill="#3a3a3a" opacity="1" />
                    <rect x="99" y="38" width="5" height="6" rx="1" fill="#4a4a4a" opacity="1" />
                    <rect x="97" y="36" width="5" height="3" rx="1" fill="#5a5a5a" opacity="0.6" />
                </g>
            </svg>
        </div>
    );
};

// Componente de línea animada con efecto de luz blanca
const AnimatedConnection = ({
                                startX,
                                startY,
                                endX,
                                endY,
                                delay = 0,
                                pathPoints,
                            }: {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    delay?: number;
    pathPoints?: { x: number; y: number }[];
}) => {
    // Crear el path SVG con puntos intermedios si es necesario
    const createPath = () => {
        if (pathPoints && pathPoints.length > 0) {
            let path = `M ${startX} ${startY}`;
            pathPoints.forEach((point) => {
                path += ` L ${point.x} ${point.y}`;
            });
            path += ` L ${endX} ${endY}`;
            return path;
        }
        return `M ${startX} ${startY} L ${endX} ${endY}`;
    };

    const path = createPath();

    return (
        <g>
            {/* Línea base (sutil) */}
            <path
                d={path}
                stroke="#333"
                strokeWidth="1.5"
                fill="none"
                opacity="0.3"
            />
            {/* Línea animada con efecto de luz blanca */}
            <motion.path
                d={path}
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: [0, 1, 1, 0],
                    opacity: [0, 1, 1, 0],
                }}
                transition={{
                    duration: 2.5,
                    delay,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut",
                }}
                style={{
                    filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 6px rgba(255, 255, 255, 0.4))",
                }}
            />
        </g>
    );
};

// Componente de efecto máquina de escribir
const TypewriterEffect = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isGenerating, setIsGenerating] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const generatingTimer = setTimeout(() => {
            setIsGenerating(false);
            setCurrentIndex(0);
            setDisplayedText("");
        }, 3000);

        return () => clearTimeout(generatingTimer);
    }, []);

    useEffect(() => {
        if (!isGenerating && currentIndex < text.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [isGenerating, currentIndex, text]);

    return (
        <div className="relative">
            {isGenerating ? (
                <motion.span
                    className="text-white"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                >
                    Generating description
                </motion.span>
            ) : (
                <span className="text-white">
                    {displayedText}
                    <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="inline-block w-1 h-5 bg-white ml-1"
                    />
                </span>
            )}
        </div>
    );
};

// Mapeo de tecnologías a iconos - CORREGIDO
const techIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
    'JavaScript': SiJavascript,
    'Java': FaJava,
    'Python': SiPython,
    'TypeScript': SiTypescript,
    'NodeJS': SiNodedotjs,
    'Express': SiExpress,
    'JWT': SiJsonwebtokens,
    'SQL Lite': SiSqlite,
    'PostgreSQL': SiPostgresql,
    'Mongo': SiMongodb,
    'Redis': SiRedis,
    'Axios': FaServer,
    'Bcrypt': FaRobot,
    'Dotenv': SiDotenv,
    'HTML': SiHtml5,
    'CSS': SiCss3,
    'React': SiReact,
    'Tailwindcss': SiTailwindcss,
    'Docker': SiDocker,
    'CI/CD': FaCodeBranch,
    'Kubernetes': SiKubernetes,
    'YAML': SiYaml,
    'AWS': FaCloud,
    'Google Cloud': SiGooglecloud,
    'ScikitLearn': SiScikitlearn,
    'Numpy': SiNumpy,
    'Pandas': SiPandas,
    'Matplotlib': FaChartLine,
    'Seaborn': FaChartBar,
    'Tensorflow': SiTensorflow,
    'Keras': SiKeras,
    'Kaggle': SiKaggle,
    'HuggingFace': SiHuggingface,
};

// Componente para mostrar icono de tecnología
const TechIcon = ({ name }: { name: string }) => {
    const IconComponent = techIcons[name] || SiJavascript;

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

export default function PortfolioView() {
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [pinPositions, setPinPositions] = useState<Map<string, { x: number; y: number }>>(new Map());
    const profileImageRef = useRef<HTMLDivElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);
    const roleRef = useRef<HTMLParagraphElement>(null);
    const contactBtnRef = useRef<HTMLButtonElement>(null);
    const resumeBtnRef = useRef<HTMLButtonElement>(null);
    const projectsBtnRef = useRef<HTMLButtonElement>(null);
    const descriptionRef = useRef<HTMLDivElement>(null);
    const chipRef = useRef<HTMLDivElement>(null);
    const buttonsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMounted(true);

        // Detectar si es móvil
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handlePinPositions = (positions: Map<string, { x: number; y: number }>) => {
        setPinPositions(positions);
    };

    // Función para obtener coordenadas de elementos - usando getBoundingClientRect para posición fija
    const getElementCenter = <T extends HTMLElement>(ref: React.RefObject<T | null>) => {
        if (!ref.current) return null;
        const rect = ref.current.getBoundingClientRect();
        return {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        };
    };

    // Función para obtener coordenadas de elementos evitando textos
    const getElementEdge = <T extends HTMLElement>(ref: React.RefObject<T | null>, side: 'left' | 'right' | 'top' | 'bottom') => {
        if (!ref.current) return null;
        const rect = ref.current.getBoundingClientRect();
        switch (side) {
            case 'left':
                return { x: rect.left, y: rect.top + rect.height / 2 };
            case 'right':
                return { x: rect.right, y: rect.top + rect.height / 2 };
            case 'top':
                return { x: rect.left + rect.width / 2, y: rect.top };
            case 'bottom':
                return { x: rect.left + rect.width / 2, y: rect.bottom };
            default:
                return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
        }
    };

    const randomDescription =
        "Passionate software engineer with expertise in modern web technologies. Specializing in full-stack development, I create innovative solutions that combine elegant design with robust functionality.";

    // Obtener posiciones de elementos para calcular rutas - usando getBoundingClientRect para posición fija
    const profileImagePos = getElementEdge(profileImageRef, 'bottom');
    const namePos = nameRef.current ? {
        top: nameRef.current.getBoundingClientRect().top,
        bottom: nameRef.current.getBoundingClientRect().bottom,
        left: nameRef.current.getBoundingClientRect().left,
        right: nameRef.current.getBoundingClientRect().right,
    } : null;
    const rolePos = getElementEdge(roleRef, 'bottom');
    const chipPos = chipRef.current ? {
        x: chipRef.current.getBoundingClientRect().left + chipRef.current.getBoundingClientRect().width / 2,
        y: chipRef.current.getBoundingClientRect().top + chipRef.current.getBoundingClientRect().height / 2,
    } : null;
    const buttonsContainerPos = getElementCenter(buttonsContainerRef);

    // Definir las conexiones - Desktop: rutas específicas, Mobile: solo 1 conexión recta
    const connections = mounted && chipPos
        ? (isMobile
            ? [
                // En móvil: solo 1 conexión recta a los botones apilados
                {
                    pinKey: "bottom-2",
                    target: buttonsContainerPos,
                    pathPoints: undefined,
                    delay: 0,
                },
            ]
            : [
                // Desktop: Conexión desde pin superior izquierdo a imagen - RODEA EL NOMBRE
                {
                    pinKey: "top-0",
                    target: profileImagePos,
                    pathPoints: profileImagePos && namePos && chipPos ? [
                        { x: chipPos.x - 80, y: chipPos.y - 100 }, // Ir hacia arriba y a la izquierda
                        { x: profileImagePos.x - 30, y: chipPos.y - 100 }, // Luego horizontal (por encima del nombre)
                        { x: profileImagePos.x - 30, y: profileImagePos.y }, // Finalmente vertical hacia la imagen
                    ] : undefined,
                    delay: 0,
                },
                // Conexión desde pin superior medio a rol - LÍNEA RECTA QUE RODEA LOS BOTONES
                {
                    pinKey: "top-2",
                    target: rolePos,
                    pathPoints: rolePos && buttonsContainerPos && chipPos ? [
                        { x: chipPos.x, y: chipPos.y - 100 }, // Ir hacia arriba
                        { x: buttonsContainerPos.x + 80, y: chipPos.y - 100 }, // Luego a la derecha (rodeando botones)
                        { x: buttonsContainerPos.x + 80, y: rolePos.y }, // Finalmente hacia abajo al rol
                    ] : undefined,
                    delay: 0.8,
                },
                // Conexión desde pin derecho a botón Contact - LÍNEA RECTA
                {
                    pinKey: "right-0",
                    target: getElementEdge(contactBtnRef, 'left'),
                    pathPoints: undefined,
                    delay: 1.6,
                },
                // Conexión desde pin superior derecho a botón Resume - LÍNEA RECTA
                {
                    pinKey: "top-4",
                    target: getElementEdge(resumeBtnRef, 'left'),
                    pathPoints: undefined,
                    delay: 2.4,
                },
                // Conexión desde pin superior medio-derecho a botón Projects - LÍNEA RECTA
                {
                    pinKey: "top-3",
                    target: getElementEdge(projectsBtnRef, 'left'),
                    pathPoints: undefined,
                    delay: 3.2,
                },
                // Conexión desde pin inferior medio a recuadro de descripción - LÍNEA RECTA HACIA ABAJO
                {
                    pinKey: "bottom-2",
                    target: getElementCenter(descriptionRef),
                    pathPoints: undefined,
                    delay: 4.0,
                },
            ])
            .filter((conn) => conn.target && pinPositions.has(conn.pinKey))
        : [];

    // Definir tecnologías por categorías - REORGANIZADAS
    const techStack = {
        Backend: ['JavaScript', 'TypeScript', 'Java', 'Python', 'NodeJS', 'Express', 'JWT', 'Axios', 'Bcrypt', 'Dotenv'],
        Frontend: ['HTML', 'CSS', 'React', 'Tailwindcss'],
        Databases: ['SQL Lite', 'PostgreSQL', 'Mongo', 'Redis'],
        DevOps: ['Docker', 'CI/CD', 'Kubernetes', 'YAML'],
        Cloud: ['AWS', 'Google Cloud'],
        AI: ['ScikitLearn', 'Numpy', 'Pandas', 'Matplotlib', 'Seaborn', 'Tensorflow', 'Keras', 'Kaggle', 'HuggingFace'],
    };

    // Dividir en dos columnas
    const leftColumn = ['Backend', 'Frontend', 'Databases'];
    const rightColumn = ['DevOps', 'Cloud', 'AI'];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            {/* SVG overlay para las conexiones - FIJAS (position: fixed) */}
            <svg
                className="fixed inset-0 w-full h-full pointer-events-none hidden md:block"
                style={{ zIndex: 1 }}
            >
                {mounted &&
                    !isMobile &&
                    connections.map((conn, idx) => {
                        const pinPos = pinPositions.get(conn.pinKey!);
                        if (!pinPos || !conn.target) return null;

                        return (
                            <AnimatedConnection
                                key={idx}
                                startX={pinPos.x}
                                startY={pinPos.y}
                                endX={conn.target.x}
                                endY={conn.target.y}
                                delay={conn.delay}
                                pathPoints={conn.pathPoints}
                            />
                        );
                    })}
            </svg>

            {/* SVG para móvil - FIJAS (position: fixed) */}
            <svg
                className="fixed inset-0 w-full h-full pointer-events-none md:hidden"
                style={{ zIndex: 1 }}
            >
                {mounted &&
                    isMobile &&
                    connections.map((conn, idx) => {
                        const pinPos = pinPositions.get(conn.pinKey!);
                        if (!pinPos || !conn.target) return null;

                        return (
                            <AnimatedConnection
                                key={idx}
                                startX={pinPos.x}
                                startY={pinPos.y}
                                endX={conn.target.x}
                                endY={conn.target.y}
                                delay={conn.delay}
                                pathPoints={conn.pathPoints}
                            />
                        );
                    })}
            </svg>

            {/* Contenido principal */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 py-8 md:py-16">
                {/* Sección superior - Layout responsivo */}
                <div className="flex flex-col items-center mb-16">
                    {/* Imagen de perfil centrada */}
                    <div
                        ref={profileImageRef}
                        className="relative mb-6 md:mb-8"
                        style={{ width: "200px", height: "200px" }}
                    >
                        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center">
                            <div className="w-32 h-32 rounded-full bg-gray-700"></div>
                        </div>
                    </div>

                    {/* Nombre y Rol centrados */}
                    <div className="text-center mb-6 md:mb-8">
                        <h1
                            ref={nameRef}
                            className="text-3xl md:text-6xl font-bold mb-2 tracking-tight"
                        >
                            SEBASTIAN GALINDO ZARAGOZA
                        </h1>
                        <p
                            ref={roleRef}
                            className="text-lg md:text-2xl text-gray-400 font-medium mb-6 md:mb-8"
                        >
                            Software Engineer
                        </p>

                        {/* Botones - ARRIBA del microchip - Desktop: fila horizontal, Mobile: columna vertical */}
                        <div
                            ref={buttonsContainerRef}
                            className={`flex gap-4 mb-6 md:mb-8 ${isMobile ? 'flex-col w-full items-center' : 'flex-row justify-center'}`}
                        >
                            <button
                                ref={contactBtnRef}
                                className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors whitespace-nowrap w-full md:w-auto"
                            >
                                Contact
                            </button>
                            <button
                                ref={resumeBtnRef}
                                className="px-6 py-3 rounded-lg border border-gray-600 text-white font-medium hover:border-gray-400 transition-colors whitespace-nowrap w-full md:w-auto"
                            >
                                Resume
                            </button>
                            <button
                                ref={projectsBtnRef}
                                className="px-6 py-3 rounded-lg border border-gray-600 text-white font-medium hover:border-gray-400 transition-colors whitespace-nowrap w-full md:w-auto"
                            >
                                Projects
                            </button>
                        </div>

                        {/* Microchip debajo de los botones */}
                        <div ref={chipRef} className="my-6 md:my-8">
                            <Microchip onPinPositions={handlePinPositions} />
                        </div>
                    </div>
                </div>

                {/* Separador */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16 mt-16 md:mt-32"></div>

                {/* Sección de descripción generada */}
                <div className="mb-16">
                    <div className="max-w-4xl mx-auto">
                        <div
                            ref={descriptionRef}
                            className="border border-gray-800 rounded-xl p-6 md:p-8 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 animate-pulse"></div>
                                <div className="flex-1">
                                    <TypewriterEffect text={randomDescription} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separador */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16"></div>

                {/* Sección de proyectos */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                        <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/30 to-black/30">
                            <div className="w-full h-48 rounded-lg bg-gray-800 mb-4"></div>
                        </div>
                    </div>
                </div>

                {/* Separador */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16"></div>

                {/* Sección Tech Stack - DOS COLUMNAS */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Tech Stack</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                        {/* Columna Izquierda */}
                        <div className="space-y-6 md:space-y-8">
                            {leftColumn.map((category) => (
                                <div
                                    key={category}
                                    className="border border-gray-800 rounded-xl p-6 md:p-8 bg-gradient-to-br from-gray-900/30 to-black/30"
                                >
                                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
                                        {category}
                                    </h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                        {techStack[category as keyof typeof techStack].map((tech) => (
                                            <TechIcon key={tech} name={tech} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Columna Derecha */}
                        <div className="space-y-6 md:space-y-8">
                            {rightColumn.map((category) => (
                                <div
                                    key={category}
                                    className="border border-gray-800 rounded-xl p-6 md:p-8 bg-gradient-to-br from-gray-900/30 to-black/30"
                                >
                                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-gray-300">
                                        {category}
                                    </h3>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                                        {techStack[category as keyof typeof techStack].map((tech) => (
                                            <TechIcon key={tech} name={tech} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Separador */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16"></div>

                {/* Sección de contribuciones */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contributions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                        <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/30 to-black/30">
                            <div className="w-full h-48 rounded-lg bg-gray-800 mb-4"></div>
                        </div>
                    </div>
                </div>

                {/* Separador */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16"></div>

                {/* Sección de certificados */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Certifies</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/30 to-black/30 hover:border-gray-700 transition-colors">
                            <h3 className="text-2xl font-semibold mb-3">Title</h3>
                            <p className="text-gray-400 mb-4">Description</p>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 rounded-lg border border-gray-700 text-sm hover:border-gray-600 transition-colors">
                                    Download
                                </button>
                            </div>
                        </div>
                        <div className="border border-gray-800 rounded-xl p-6 bg-gradient-to-br from-gray-900/30 to-black/30">
                            <div className="w-full h-48 rounded-lg bg-gray-800 mb-4"></div>
                        </div>
                    </div>
                </div>
                {/* Separador */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-16"></div>

                {/* Sección final */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12">Let's talk together</h2>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 rounded-lg border border-gray-700 text-sm hover:border-gray-600 transition-colors">
                                    Email
                                </button>
                                <button className="px-4 py-2 rounded-lg border border-gray-700 text-sm hover:border-gray-600 transition-colors">
                                    Phone Number
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="w-full h-48 rounded-lg bg-gray-800 mb-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}