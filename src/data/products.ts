export interface Product {
    id: string;
    name: string;
    title: string;
    price: number;
    description: string;
    category: string;
    subcategory?: string;
    stock: number;
    images: string[];
    slug: string;
    badge?: string;
    discount?: number;
    specs?: { label: string; value: string }[];
    sizes?: string[];
}

export const products: Product[] = [
    // ── INDUMENTARIA ─────────────────────────────────────────────────────────
    {
        id: "1",
        name: "Bata Médica FECOLSOG",
        title: "Bata Médica FECOLSOG",
        price: 116000,
        description: "Bata médica corporativa con bordado institucional de FECOLSOG. Tela de alta calidad, cómoda y duradera, ideal para consulta y procedimientos. Disponible en tallas S, M, L y XL.",
        category: "Indumentaria",
        subcategory: "batas",
        stock: 50,
        images: [
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "bata-medica-fecolsog",
        badge: "Institucional",
        sizes: ["S", "M", "L", "XL"],
        specs: [
            { label: "Material", value: "Poliéster-Algodón 65/35" },
            { label: "Tallas", value: "S, M, L, XL" },
            { label: "Color", value: "Blanco" },
            { label: "Bordado", value: "Logo FECOLSOG" }
        ]
    },
    {
        id: "2",
        name: "Bata Médica + Pin FECOLSOG",
        title: "Bata Médica + Pin FECOLSOG",
        price: 121000,
        description: "Pack completo: bata médica corporativa con bordado FECOLSOG más pin institucional dorado. La combinación perfecta para lucir el orgullo de pertenecer al gremio.",
        category: "Indumentaria",
        subcategory: "batas",
        stock: 35,
        images: [
            "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "bata-medica-pin-fecolsog",
        badge: "Pack",
        discount: 3,
        sizes: ["S", "M", "L", "XL"],
        specs: [
            { label: "Incluye", value: "Bata + Pin Dorado" },
            { label: "Tallas", value: "S, M, L, XL" },
            { label: "Color", value: "Blanco" },
            { label: "Pin", value: "Metal Dorado" }
        ]
    },
    {
        id: "3",
        name: "Traje Antifluido FECOLSOG",
        title: "Traje Antifluido FECOLSOG",
        price: 180000,
        description: "Traje antifluido corporativo con logo bordado de FECOLSOG. Fabricado en tela de barrera de alta resistencia, protege ante fluidos y salpicaduras en procedimientos quirúrgicos y obstétricos.",
        category: "Indumentaria",
        subcategory: "antifluido",
        stock: 30,
        images: [
            "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1584467735871-8e548c86caa5?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "traje-antifluido-fecolsog",
        badge: "Protección",
        sizes: ["S", "M", "L"],
        specs: [
            { label: "Material", value: "SMS Antifluido" },
            { label: "Tallas", value: "S, M, L" },
            { label: "Color", value: "Azul Institucional" },
            { label: "Resistencia", value: "Fluidos y salpicaduras" }
        ]
    },
    {
        id: "4",
        name: "Traje Antifluido + Pin FECOLSOG",
        title: "Traje Antifluido + Pin FECOLSOG",
        price: 185000,
        description: "Pack completo: traje antifluido institucional en azul FECOLSOG más pin dorado de la federación. Protección y distinción en quirófano y sala de partos.",
        category: "Indumentaria",
        subcategory: "antifluido",
        stock: 20,
        images: [
            "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "traje-antifluido-pin-fecolsog",
        badge: "Pack",
        discount: 3,
        sizes: ["S", "M", "L"],
        specs: [
            { label: "Incluye", value: "Traje + Pin Dorado" },
            { label: "Tallas", value: "S, M, L" },
            { label: "Color", value: "Azul Institucional" },
            { label: "Norma", value: "ISO 13485" }
        ]
    },
    {
        id: "5",
        name: "Cofia Quirúrgica Desechable (x10)",
        title: "Cofia Quirúrgica Desechable (x10)",
        price: 22000,
        description: "Pack de 10 cofias quirúrgicas desechables de tela no tejida (TNT). Alta cobertura, ajuste cómodo y excelente barrera ante contaminación. Ideal para uso en salas de cirugía y partos.",
        category: "Indumentaria",
        subcategory: "accesorios",
        stock: 200,
        images: [
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "cofia-quirurgica-desechable",
        specs: [
            { label: "Unidades", value: "10 por pack" },
            { label: "Material", value: "TNT No tejido" },
            { label: "Tipo", value: "Desechable" },
            { label: "Talla", value: "Única ajustable" }
        ]
    },

    // ── INSUMOS MÉDICOS ───────────────────────────────────────────────────────
    {
        id: "6",
        name: "Guantes de Examinación Látex (caja x100)",
        title: "Guantes de Examinación Látex (caja x100)",
        price: 48000,
        description: "Caja de 100 guantes de látex para examinación médica. Sin polvo, textura rugosa en la punta de los dedos para mayor sensibilidad táctil. Certificados para uso en ginecología y obstetricia.",
        category: "Insumos",
        subcategory: "guantes",
        stock: 150,
        images: [
            "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "guantes-examinacion-latex",
        badge: "Bestseller",
        sizes: ["S", "M", "L"],
        specs: [
            { label: "Unidades", value: "100 por caja" },
            { label: "Material", value: "Látex natural" },
            { label: "Polvo", value: "Sin polvo" },
            { label: "Tallas", value: "S, M, L" }
        ]
    },
    {
        id: "7",
        name: "Mascarilla N95 (pack x5)",
        title: "Mascarilla N95 (pack x5)",
        price: 38000,
        description: "Pack de 5 mascarillas de protección respiratoria N95 con válvula de exhalación. Filtra al menos el 95% de partículas en el aire. Ajuste nasal moldeado y correas elásticas para mayor comodidad.",
        category: "Insumos",
        subcategory: "mascarillas",
        stock: 80,
        images: [
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "mascarilla-n95",
        specs: [
            { label: "Unidades", value: "5 por pack" },
            { label: "Filtración", value: "≥ 95% partículas" },
            { label: "Certificación", value: "NIOSH N95" },
            { label: "Válvula", value: "Con válvula" }
        ]
    },
    {
        id: "8",
        name: "Gel Lubricante Estéril (x10 sobres)",
        title: "Gel Lubricante Estéril (x10 sobres)",
        price: 32000,
        description: "Pack de 10 sobres de gel lubricante estéril de 5ml cada uno, formulado para uso ginecológico. Base acuosa, compatible con equipos de ultrasonido transvaginal y procedimientos de examinación.",
        category: "Insumos",
        subcategory: "geles",
        stock: 120,
        images: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "gel-lubricante-esteril",
        specs: [
            { label: "Unidades", value: "10 sobres x 5ml" },
            { label: "Base", value: "Acuosa" },
            { label: "Esterilidad", value: "Estéril certificado" },
            { label: "Compatibilidad", value: "Ultrasonido TV" }
        ]
    },

    // ── DISPOSITIVOS ──────────────────────────────────────────────────────────
    {
        id: "9",
        name: "Tensiómetro Digital Portátil",
        title: "Tensiómetro Digital Portátil",
        price: 189000,
        description: "Tensiómetro digital automático de brazo, ideal para el seguimiento de la presión arterial en consulta y monitoreo prenatal. Pantalla grande, memoria para 90 mediciones y detección de arritmia.",
        category: "Dispositivos",
        subcategory: "tensiometros",
        stock: 25,
        images: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "tensiometro-digital-portatil",
        badge: "Recomendado",
        specs: [
            { label: "Tipo", value: "Automático de brazo" },
            { label: "Memoria", value: "90 mediciones" },
            { label: "Detección", value: "Arritmia" },
            { label: "Batería", value: "4 x AA" }
        ]
    },
    {
        id: "10",
        name: "Oxímetro de Pulso Digital",
        title: "Oxímetro de Pulso Digital",
        price: 85000,
        description: "Oxímetro de pulso portátil de dedo con pantalla OLED. Mide la saturación de oxígeno (SpO2) y la frecuencia cardíaca en segundos. Indispensable en urgencias obstétricas y monitoreo neonatal.",
        category: "Dispositivos",
        subcategory: "diagnostico",
        stock: 40,
        images: [
            "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "oximetro-pulso-digital",
        specs: [
            { label: "Medición", value: "SpO2 + FC" },
            { label: "Pantalla", value: "OLED" },
            { label: "Precisión", value: "±2% SpO2" },
            { label: "Batería", value: "2 x AAA" }
        ]
    },
    {
        id: "11",
        name: "Estetoscopio Clínico Doble",
        title: "Estetoscopio Clínico Doble",
        price: 145000,
        description: "Estetoscopio clínico de doble campana con membrana y campana abierta para auscultación de alta sensibilidad. Tubuladura de PVC antiestática, auriculares con ajuste ergonómico. Ideal para consulta prenatal y ginecológica.",
        category: "Dispositivos",
        subcategory: "diagnostico",
        stock: 18,
        images: [
            "https://images.unsplash.com/photo-1584467735815-f778f274e296?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "estetoscopio-clinico-doble",
        badge: "Clínico",
        specs: [
            { label: "Tipo", value: "Doble campana" },
            { label: "Tubo", value: "PVC antiestático" },
            { label: "Largo tubo", value: "55 cm" },
            { label: "Color", value: "Negro" }
        ]
    },

    // ── EDUCACIÓN ─────────────────────────────────────────────────────────────
    {
        id: "12",
        name: "Guía Clínica de Ginecología y Obstetricia FECOLSOG 2025",
        title: "Guía Clínica de Ginecología y Obstetricia FECOLSOG 2025",
        price: 95000,
        description: "Edición 2025 de la guía clínica oficial de FECOLSOG. Protocolos actualizados en atención prenatal, parto, puerperio, patologías ginecológicas frecuentes y manejo de urgencias obstétricas. Avalada por la comunidad científica colombiana.",
        category: "Educacion",
        stock: 60,
        images: [
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "guia-clinica-ginecologia-obstetricia-2025",
        badge: "Nuevo 2025",
        specs: [
            { label: "Edición", value: "2025" },
            { label: "Páginas", value: "420" },
            { label: "Formato", value: "Tapa dura" },
            { label: "Idioma", value: "Español" }
        ]
    },
    {
        id: "13",
        name: "Manual de Planificación Familiar 2024",
        title: "Manual de Planificación Familiar 2024",
        price: 72000,
        description: "Manual oficial de FECOLSOG sobre métodos anticonceptivos modernos. Incluye evidencia actualizada sobre eficacia, seguridad y criterios de elegibilidad médica para cada método, basado en los criterios de la OMS.",
        category: "Educacion",
        stock: 45,
        images: [
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "manual-planificacion-familiar-2024",
        specs: [
            { label: "Edición", value: "2024" },
            { label: "Páginas", value: "280" },
            { label: "Formato", value: "Tapa blanda" },
            { label: "Base", value: "Criterios OMS" }
        ]
    },
    {
        id: "14",
        name: "Atlas de Ultrasonido en Ginecología y Obstetricia",
        title: "Atlas de Ultrasonido en Ginecología y Obstetricia",
        price: 130000,
        description: "Atlas ilustrado con más de 500 imágenes ecográficas de alta resolución. Cubre ecografía del primer, segundo y tercer trimestre, patología ginecológica y medicina fetal. Referente para residentes y especialistas.",
        category: "Educacion",
        stock: 30,
        images: [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "atlas-ultrasonido-ginecologia-obstetricia",
        badge: "Referencia",
        specs: [
            { label: "Imágenes", value: "+500 ecografías" },
            { label: "Páginas", value: "380" },
            { label: "Formato", value: "A4, tapa dura" },
            { label: "Resolución", value: "Alta definición" }
        ]
    },

    // ── ARTÍCULOS FECOLSOG ────────────────────────────────────────────────────
    {
        id: "15",
        name: "Pin Institucional FECOLSOG",
        title: "Pin Institucional FECOLSOG",
        price: 15000,
        description: "Pin dorado con el escudo institucional de FECOLSOG. Fabricado en metal con acabado chapado en oro. El complemento perfecto para la bata médica o el saco de cualquier especialista orgulloso de su federación.",
        category: "Articulos",
        stock: 200,
        images: [
            "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "pin-institucional-fecolsog",
        specs: [
            { label: "Material", value: "Metal chapado en oro" },
            { label: "Tamaño", value: "2 cm diámetro" },
            { label: "Cierre", value: "Mariposa" },
            { label: "Diseño", value: "Escudo FECOLSOG" }
        ]
    },
    {
        id: "16",
        name: "Taza Institucional FECOLSOG",
        title: "Taza Institucional FECOLSOG",
        price: 38000,
        description: "Taza de cerámica de 350ml con el logo de FECOLSOG impreso en alta resolución. Resistente al lavavajillas. Un regalo ideal para colegas y residentes.",
        category: "Articulos",
        stock: 75,
        images: [
            "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "taza-institucional-fecolsog",
        specs: [
            { label: "Material", value: "Cerámica" },
            { label: "Capacidad", value: "350 ml" },
            { label: "Impresión", value: "Sublimación HD" },
            { label: "Apto", value: "Lavavajillas" }
        ]
    },
    {
        id: "17",
        name: "Bolígrafos Corporativos FECOLSOG (x5)",
        title: "Bolígrafos Corporativos FECOLSOG (x5)",
        price: 25000,
        description: "Pack de 5 bolígrafos con logo FECOLSOG. Tinta azul de larga duración, punta media 1mm. Ideales para consultorios, congresos y como elemento de merchandising institucional.",
        category: "Articulos",
        stock: 300,
        images: [
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "boligrafos-corporativos-fecolsog",
        specs: [
            { label: "Unidades", value: "5 bolígrafos" },
            { label: "Tinta", value: "Azul" },
            { label: "Punta", value: "1 mm" },
            { label: "Material", value: "Metal y plástico" }
        ]
    },
    {
        id: "18",
        name: "Tote Bag FECOLSOG",
        title: "Tote Bag FECOLSOG",
        price: 48000,
        description: "Bolso tote de algodón 100% con serigrafía del logo FECOLSOG. Asas largas, fondo reforzado y capacidad para transportar libros, materiales de congreso y objetos personales. Sostenible y reutilizable.",
        category: "Articulos",
        stock: 60,
        images: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "tote-bag-fecolsog",
        badge: "Eco",
        specs: [
            { label: "Material", value: "Algodón 100%" },
            { label: "Impresión", value: "Serigrafía" },
            { label: "Asas", value: "45 cm largo" },
            { label: "Capacidad", value: "15 litros" }
        ]
    },

    // ── MÁS EDUCACIÓN ────────────────────────────────────────────────────────
    {
        id: "21",
        name: "Manual de Alto Riesgo Obstétrico FECOLSOG",
        title: "Manual de Alto Riesgo Obstétrico FECOLSOG",
        price: 110000,
        description: "Guía de referencia para el manejo integral del embarazo de alto riesgo. Aborda desde la diabetes gestacional y la preeclampsia hasta el manejo del parto pretérmino y las cardiopatías en el embarazo. Redactado por el Comité Científico de FECOLSOG con base en evidencia nacional e internacional.",
        category: "Educacion",
        stock: 40,
        images: [
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "manual-alto-riesgo-obstetrico",
        badge: "Esencial",
        specs: [
            { label: "Edición", value: "3.ª ed. 2024" },
            { label: "Páginas", value: "310" },
            { label: "Formato", value: "Tapa blanda" },
            { label: "Nivel", value: "Especialista / Residente" }
        ]
    },
    {
        id: "22",
        name: "Compendio de Ginecología Oncológica",
        title: "Compendio de Ginecología Oncológica",
        price: 145000,
        description: "Obra de referencia en oncología ginecológica para el especialista colombiano. Cubre cáncer de cuello uterino, endometrio, ovario y vulva: estadificación FIGO actualizada, protocolos de tratamiento quirúrgico, quimioterapia y seguimiento. Incluye casos clínicos comentados y algoritmos de decisión.",
        category: "Educacion",
        stock: 22,
        images: [
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "compendio-ginecologia-oncologica",
        badge: "Especializado",
        specs: [
            { label: "Edición", value: "2.ª ed. 2023" },
            { label: "Páginas", value: "460" },
            { label: "Incluye", value: "Algoritmos + casos" },
            { label: "Estadificación", value: "FIGO 2023" }
        ]
    },
    {
        id: "23",
        name: "Curso Online: Colposcopía Práctica para el Ginecólogo",
        title: "Curso Online: Colposcopía Práctica para el Ginecólogo",
        price: 180000,
        description: "Acceso por 12 meses a la plataforma educativa de FECOLSOG. Más de 8 horas de video con casos clínicos reales, clasificación de lesiones colposcópicas, toma de biopsia guiada y criterios de referencia. Incluye evaluación final y certificado con créditos de educación médica continua (EMC).",
        category: "Educacion",
        stock: 200,
        images: [
            "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "curso-online-colposcopia-practica",
        badge: "Digital",
        discount: 15,
        specs: [
            { label: "Modalidad", value: "100% en línea" },
            { label: "Acceso", value: "12 meses" },
            { label: "Duración", value: "8+ horas de video" },
            { label: "Certificado", value: "EMC FECOLSOG" }
        ]
    },
    {
        id: "24",
        name: "Suscripción Revista RCOG — 1 año",
        title: "Suscripción Revista Colombiana de Obstetricia y Ginecología — 1 año",
        price: 85000,
        description: "Suscripción anual impresa y digital a la Revista Colombiana de Obstetricia y Ginecología (RCOG), la publicación científica oficial de FECOLSOG con más de 70 años de historia. Recibirás cuatro números al año con artículos originales, revisiones sistemáticas, guías de práctica clínica y reportes de caso.",
        category: "Educacion",
        stock: 150,
        images: [
            "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "suscripcion-revista-rcog-1-anio",
        badge: "Suscripción",
        specs: [
            { label: "Frecuencia", value: "4 números / año" },
            { label: "Formato", value: "Impresa + digital" },
            { label: "Indexación", value: "Latindex, SciELO" },
            { label: "Idioma", value: "Español + resúmenes en inglés" }
        ]
    },
    {
        id: "25",
        name: "Cuaderno de Casos Clínicos: Obstetricia de Alto Riesgo",
        title: "Cuaderno de Casos Clínicos: Obstetricia de Alto Riesgo",
        price: 58000,
        description: "Colección de 60 casos clínicos reales anonimizados del Comité de Alto Riesgo de FECOLSOG. Cada caso presenta el cuadro clínico, los exámenes paraclínicos, la discusión diagnóstica y la decisión terapéutica con justificación basada en evidencia. Ideal para residentes y ginecólogos en formación continua.",
        category: "Educacion",
        stock: 55,
        images: [
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "cuaderno-casos-clinicos-obstetricia",
        specs: [
            { label: "Casos", value: "60 casos reales" },
            { label: "Páginas", value: "240" },
            { label: "Nivel", value: "Residente / MG" },
            { label: "Formato", value: "Espiral, A5" }
        ]
    },
    {
        id: "26",
        name: "Flashcards FECOLSOG: Ginecología y Obstetricia",
        title: "Flashcards FECOLSOG: Ginecología y Obstetricia",
        price: 45000,
        description: "Set de 200 tarjetas de estudio (flashcards) con los conceptos clave de ginecología y obstetricia para residentes y estudiantes de medicina. Formato de pregunta-respuesta, diseñadas por docentes universitarios afiliados a FECOLSOG. Incluyen tablas de dosis, criterios diagnósticos y algoritmos de manejo.",
        category: "Educacion",
        stock: 80,
        images: [
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "flashcards-fecolsog-go",
        badge: "Estudio",
        specs: [
            { label: "Tarjetas", value: "200 flashcards" },
            { label: "Temas", value: "GO completa" },
            { label: "Formato", value: "Caja + ring" },
            { label: "Nivel", value: "Pregrado / Residente" }
        ]
    },

    // ── MÁS ARTÍCULOS FECOLSOG ────────────────────────────────────────────────
    {
        id: "27",
        name: "Polo Corporativo FECOLSOG",
        title: "Polo Corporativo FECOLSOG",
        price: 75000,
        description: "Camiseta tipo polo piqué 100% algodón con bordado del escudo de FECOLSOG en el pecho izquierdo. Corte clásico, cuello y puños de canalé. Perfecta para usar en jornadas académicas, congresos y actividades institucionales. Disponible en azul institucional y blanco.",
        category: "Articulos",
        stock: 80,
        images: [
            "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "polo-corporativo-fecolsog",
        sizes: ["S", "M", "L", "XL", "XXL"],
        specs: [
            { label: "Material", value: "Piqué algodón 100%" },
            { label: "Tallas", value: "S, M, L, XL, XXL" },
            { label: "Colores", value: "Azul / Blanco" },
            { label: "Bordado", value: "Escudo FECOLSOG" }
        ]
    },
    {
        id: "28",
        name: "Agenda Médica Profesional FECOLSOG 2026",
        title: "Agenda Médica Profesional FECOLSOG 2026",
        price: 52000,
        description: "Agenda anual 2026 diseñada especialmente para ginecólogos y obstetras. Formato A5 con vista semanal, sección de guardias y turnos, tablas de referencia clínica rápida (valores de laboratorio, dosis de oxitocina, criterios de Bishop) e información de los capítulos regionales de FECOLSOG. Tapa dura con logo impreso.",
        category: "Articulos",
        stock: 120,
        images: [
            "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "agenda-medica-fecolsog-2026",
        badge: "Nuevo 2026",
        specs: [
            { label: "Año", value: "2026" },
            { label: "Formato", value: "A5, tapa dura" },
            { label: "Vista", value: "Semanal" },
            { label: "Extra", value: "Tablas clínicas GO" }
        ]
    },
    {
        id: "29",
        name: "Termo de Acero Inoxidable FECOLSOG 500ml",
        title: "Termo de Acero Inoxidable FECOLSOG 500ml",
        price: 68000,
        description: "Termo de doble pared en acero inoxidable 18/8 con tapa hermética. Mantiene bebidas calientes hasta 12 horas y frías hasta 24 horas. Logo de FECOLSOG en serigrafía de alta durabilidad. Libre de BPA, apto para lavavajillas. Ideal para el consultorio o largas jornadas de guardia.",
        category: "Articulos",
        stock: 90,
        images: [
            "https://images.unsplash.com/photo-1510894347713-fc3dc6166cc9?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "termo-acero-fecolsog-500ml",
        badge: "Popular",
        specs: [
            { label: "Material", value: "Acero inox 18/8" },
            { label: "Capacidad", value: "500 ml" },
            { label: "Caliente", value: "12 horas" },
            { label: "Frío", value: "24 horas" }
        ]
    },
    {
        id: "30",
        name: "Maletín Médico Profesional FECOLSOG",
        title: "Maletín Médico Profesional FECOLSOG",
        price: 145000,
        description: "Maletín ejecutivo en cuero sintético de alta calidad con bordado del logo FECOLSOG. Compartimento principal amplio para laptop de 15,6\", bolsillos organizadores para documentos y artículos personales, asa de mano y correa de hombro ajustable. El complemento ideal para congresos y visitas institucionales.",
        category: "Articulos",
        stock: 35,
        images: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "maletin-medico-profesional-fecolsog",
        badge: "Premium",
        specs: [
            { label: "Material", value: "Cuero sintético" },
            { label: "Laptop", value: "Hasta 15,6\"" },
            { label: "Correa", value: "Ajustable" },
            { label: "Logo", value: "Bordado FECOLSOG" }
        ]
    },
    {
        id: "31",
        name: "USB Corporativo FECOLSOG 32GB",
        title: "USB Corporativo FECOLSOG 32GB",
        price: 35000,
        description: "Memoria USB 3.0 de 32GB con carcasa metálica y logo grabado de FECOLSOG. Transferencia de datos de hasta 80 MB/s. Viene precargada con el catálogo institucional de FECOLSOG y los documentos del congreso del año en curso. Ideal para material de congresos o regalo institucional.",
        category: "Articulos",
        stock: 150,
        images: [
            "https://images.unsplash.com/photo-1597673030470-87f51f079434?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "usb-corporativo-fecolsog-32gb",
        specs: [
            { label: "Capacidad", value: "32 GB" },
            { label: "USB", value: "3.0 — 80 MB/s" },
            { label: "Carcasa", value: "Metal grabado" },
            { label: "Precargado", value: "Material institucional" }
        ]
    },
    {
        id: "32",
        name: "Llavero Metálico FECOLSOG",
        title: "Llavero Metálico FECOLSOG",
        price: 18000,
        description: "Llavero en metal con acabado satinado y escudo de FECOLSOG en relieve. Argolla giratoria de acero inoxidable. Un detalle institucional elegante y duradero, perfecto para entrega en congresos, talleres y como obsequio a socios y afiliados.",
        category: "Articulos",
        stock: 300,
        images: [
            "https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "llavero-metalico-fecolsog",
        specs: [
            { label: "Material", value: "Metal satinado" },
            { label: "Acabado", value: "Escudo en relieve" },
            { label: "Argolla", value: "Acero inoxidable" },
            { label: "Empaque", value: "Bolsa organza" }
        ]
    },
    {
        id: "33",
        name: "Portabadge con Cordón FECOLSOG",
        title: "Portabadge con Cordón FECOLSOG",
        price: 22000,
        description: "Portabadge rígido tamaño carné (8,5 × 5,4 cm) con cordón sublimado estampado con el logo de FECOLSOG y los colores institucionales azul y blanco. Cierre de seguridad y clip giratorio. Imprescindible para congresos, jornadas académicas y visitas hospitalarias.",
        category: "Articulos",
        stock: 250,
        images: [
            "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "portabadge-cordon-fecolsog",
        specs: [
            { label: "Tamaño", value: "8,5 × 5,4 cm" },
            { label: "Cordón", value: "Sublimado FECOLSOG" },
            { label: "Cierre", value: "Clip giratorio" },
            { label: "Pack", value: "Individual + bolsa" }
        ]
    },

    // ── CONGRESOS ─────────────────────────────────────────────────────────────
    {
        id: "19",
        name: "Entrada Congreso Nacional FECOLSOG 2025",
        title: "Entrada Congreso Nacional FECOLSOG 2025",
        price: 450000,
        description: "Inscripción al XLIV Congreso Nacional de Ginecología y Obstetricia — FECOLSOG 2025. Tres días de ponencias magistrales, talleres prácticos, mesas redondas y actualización científica con los mejores especialistas nacionales e internacionales.",
        category: "Congresos",
        stock: 500,
        images: [
            "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop"
        ],
        slug: "entrada-congreso-nacional-fecolsog-2025",
        badge: "Evento Estrella",
        discount: 10,
        specs: [
            { label: "Fecha", value: "Sep 2025 — Bogotá" },
            { label: "Duración", value: "3 días" },
            { label: "Acceso", value: "Todas las sesiones" },
            { label: "Incluye", value: "Kit congresista + certificado" }
        ]
    },
    {
        id: "20",
        name: "Taller Práctico: Colposcopía Avanzada",
        title: "Taller Práctico: Colposcopía Avanzada",
        price: 280000,
        description: "Taller presencial de colposcopía avanzada con simuladores y casos clínicos reales. Cupos muy limitados. Avalado por FECOLSOG y con certificación de horas de educación médica continua (EMC).",
        category: "Congresos",
        stock: 20,
        images: [
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop"
        ],
        badge: "Cupos Limitados",
        slug: "taller-colposcopia-avanzada",
        specs: [
            { label: "Modalidad", value: "Presencial" },
            { label: "Duración", value: "8 horas" },
            { label: "Cupos", value: "20 participantes" },
            { label: "Certificación", value: "EMC FECOLSOG" }
        ]
    },
];

export const getProductBySlug = (slug: string) => products.find(p => p.slug === slug);
export const getRelatedProducts = (category: string, currentSlug: string) =>
    products.filter(p => p.category === category && p.slug !== currentSlug).slice(0, 4);
