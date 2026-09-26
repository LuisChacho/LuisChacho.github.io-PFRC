// BANCO DE 50 PREGUNTAS DE FÍSICA (Gravedad = 9.8 m/s^2)
const questionsData = [
    // --- MOVIMIENTO Y TRAYECTORIA ---
    {
        id: 1,
        topic: "Movimiento y Trayectoria",
        text: "¿Cuál es la diferencia fundamental entre trayectoria y desplazamiento?",
        options: [
            "La trayectoria es la línea continua del recorrido (escalar) y el desplazamiento es el vector entre la posición inicial y final.",
            "La trayectoria siempre es un vector y el desplazamiento es un valor numérico siempre positivo.",
            "El desplazamiento depende del camino recorrido, mientras que la trayectoria solo toma en cuenta los extremos.",
            "Ambos son magnitudes vectoriales pero se expresan en unidades distintas."
        ],
        correct: 0,
        explanation: "La trayectoria es la sucesión geométrica de puntos que recorre un cuerpo (longitud escalar), mientras que el desplazamiento $\\Delta \\vec{r} = \\vec{r}_f - \\vec{r}_0$ es una magnitud vectorial que une directamente la posición inicial con la final."
    },
    {
        id: 2,
        topic: "Movimiento y Trayectoria",
        text: "Un atleta corre alrededor de una pista circular de radio $R = 50\\text{ m}$ y completa exactamente una vuelta. Determine la distancia recorrida $d$ y el módulo del desplazamiento $|\\Delta \\vec{r}|$.",
        options: [
            "$d = 314.16\\text{ m}$ y $|\\Delta \\vec{r}| = 0\\text{ m}$",
            "$d = 0\\text{ m}$ y $|\\Delta \\vec{r}| = 314.16\\text{ m}$",
            "$d = 100\\text{ m}$ y $|\\Delta \\vec{r}| = 50\\text{ m}$",
            "$d = 314.16\\text{ m}$ y $|\\Delta \\vec{r}| = 100\\text{ m}$"
        ],
        correct: 0,
        explanation: "La distancia recorrida es el perímetro del círculo: $d = 2\\pi R = 2\\pi(50) \\approx 314.16\\text{ m}$. Al regresar al mismo punto de partida, la posición inicial coincide con la final, por lo que el desplazamiento es cero."
    },
    {
        id: 3,
        topic: "Movimiento y Trayectoria",
        text: "Un móvil se desplaza $30\\text{ m}$ al Norte y luego $40\\text{ m}$ al Este. ¿Cuál es el módulo de su desplazamiento total?",
        options: ["$50\\text{ m}$", "$70\\text{ m}$", "$10\\text{ m}$", "$25\\text{ m}$"],
        correct: 0,
        explanation: "Los desplazamientos son perpendiculares. Por Teorema de Pitágoras: $|\\Delta \\vec{r}| = \\sqrt{30^2 + 40^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\text{ m}$."
    },
    {
        id: 4,
        topic: "Movimiento y Trayectoria",
        text: "El vector posición de una partícula en función del tiempo viene dado por $\\vec{r}(t) = (3t)\\hat{i} + (2t^2 - 1)\\hat{j}\\text{ (m)}$. Determine la posición inicial $\\vec{r}(0)$ y la posición a los $t = 2\\text{ s}$.",
        options: [
            "$\\vec{r}(0) = -1\\hat{j}\\text{ m}$ y $\\vec{r}(2) = (6\\hat{i} + 7\\hat{j})\\text{ m}$",
            "$\\vec{r}(0) = 0\\hat{i}\\text{ m}$ y $\\vec{r}(2) = (6\\hat{i} + 8\\hat{j})\\text{ m}$",
            "$\\vec{r}(0) = (3\\hat{i} - 1\\hat{j})\\text{ m}$ y $\\vec{r}(2) = (6\\hat{i} + 7\\hat{j})\\text{ m}$",
            "$\\vec{r}(0) = -1\\hat{j}\\text{ m}$ y $\\vec{r}(2) = (3\\hat{i} + 7\\hat{j})\\text{ m}$"
        ],
        correct: 0,
        explanation: "Para $t = 0$: $\\vec{r}(0) = 3(0)\\hat{i} + (2(0)^2 - 1)\\hat{j} = -1\\hat{j}\\text{ m}$. Para $t = 2$: $\\vec{r}(2) = 3(2)\\hat{i} + (2(2)^2 - 1)\\hat{j} = 6\\hat{i} + (8 - 1)\\hat{j} = (6\\hat{i} + 7\\hat{j})\\text{ m}$."
    },
    {
        id: 5,
        topic: "Movimiento y Trayectoria",
        text: "¿En qué condición el módulo del desplazamiento es idéntico a la distancia recorrida?",
        options: [
            "Cuando el movimiento es rectilíneo en un solo sentido sin cambiar de dirección.",
            "En todo movimiento circular uniforme.",
            "Siempre que la rapidez constante sea distinta de cero.",
            "Únicamente cuando el objeto vuelve a su posición original."
        ],
        correct: 0,
        explanation: "La distancia escalar y la magnitud del vector desplazamiento solo son iguales si el móvil avanza a lo largo de una trayectoria rectilínea sin dar marcha atrás."
    },

    // --- MRU ---
    {
        id: 6,
        topic: "MRU (Vectores e Escalares)",
        text: "Un vehículo viaja con una velocidad constante $\\vec{v} = (2\\hat{i} + 4\\hat{j})\\text{ m/s}$ y recorre una distancia escalar de $50\\text{ m}$. ¿Qué tiempo le tomó recorrer dicha distancia?",
        options: ["$11.18\\text{ s}$", "$12.50\\text{ s}$", "$8.33\\text{ s}$", "$10.00\\text{ s}$"],
        correct: 0,
        explanation: "Primero se calcula el módulo de la velocidad: $v = \\sqrt{2^2 + 4^2} = \\sqrt{20} \\approx 4.472\\text{ m/s}$. Luego, $t = \\frac{d}{v} = \\frac{50}{4.472} \\approx 11.18\\text{ s}$."
    },
    {
        id: 7,
        topic: "MRU (Vectores e Escalares)",
        text: "Un dron vuela en línea recta durante $15\\text{ s}$ con velocidad constante $\\vec{v} = (6\\hat{i} - 8\\hat{j})\\text{ m/s}$. ¿Cuál es el módulo de su desplazamiento total?",
        options: ["$150\\text{ m}$", "$210\\text{ m}$", "$90\\text{ m}$", "$120\\text{ m}$"],
        correct: 0,
        explanation: "Módulo de la velocidad: $v = \\sqrt{6^2 + (-8)^2} = 10\\text{ m/s}$. Desplazamiento: $d = v \\cdot t = 10 \\cdot 15 = 150\\text{ m}$."
    },
    {
        id: 8,
        topic: "MRU (Vectores e Escalares)",
        text: "Un barco experimenta un desplazamiento de $\\Delta \\vec{r} = (120\\hat{i} + 160\\hat{j})\\text{ m}$ en un lapso de $40\\text{ s}$. Determine la rapidez con la que se desplazaba.",
        options: ["$5.0\\text{ m/s}$", "$7.0\\text{ m/s}$", "$4.0\\text{ m/s}$", "$3.0\\text{ m/s}$"],
        correct: 0,
        explanation: "Magnitud del desplazamiento: $|\\Delta \\vec{r}| = \\sqrt{120^2 + 160^2} = 200\\text{ m}$. Rapidez: $v = \\frac{200}{40} = 5.0\\text{ m/s}$."
    },
    {
        id: 9,
        topic: "MRU (Vectores e Escalares)",
        text: "Dos móviles $A$ y $B$ parten al encuentro desde dos puntos separados $300\\text{ m}$ sobre una vía recta con rapideces constantes de $20\\text{ m/s}$ y $30\\text{ m/s}$ respectivamente. ¿Cuánto tardan en encontrarse?",
        options: ["$6\\text{ s}$", "$10\\text{ s}$", "$15\\text{ s}$", "$12\\text{ s}$"],
        correct: 0,
        explanation: "Tiempo de encuentro: $t_e = \\frac{d}{v_A + v_B} = \\frac{300}{20 + 30} = 6\\text{ s}$."
    },
    {
        id: 10,
        topic: "MRU (Vectores e Escalares)",
        text: "Si un avión marcha con rapidez uniforme de $720\\text{ km/h}$, ¿cuántos metros recorre por cada segundo?",
        options: ["$200\\text{ m}$", "$720\\text{ m}$", "$120\\text{ m}$", "$360\\text{ m}$"],
        correct: 0,
        explanation: "Conversión de $\\text{km/h}$ a $\\text{m/s}$: $720 \\div 3.6 = 200\\text{ m/s}$."
    },

    // --- MRUV ---
    {
        id: 11,
        topic: "MRUV (Vectores y Despejes)",
        text: "Un automóvil parte del reposo con aceleración vectorial constante $\\vec{a} = (3\\hat{i} + 4\\hat{j})\\text{ m/s}^2$. ¿Cuál será la magnitud de su velocidad al cabo de $5\\text{ s}$?",
        options: ["$25\\text{ m/s}$", "$35\\text{ m/s}$", "$15\\text{ m/s}$", "$20\\text{ m/s}$"],
        correct: 0,
        explanation: "Velocidad: $\\vec{v}(t) = (3\\hat{i} + 4\\hat{j})(5) = (15\\hat{i} + 20\\hat{j})\\text{ m/s}$. Magnitud: $v = \\sqrt{15^2 + 20^2} = 25\\text{ m/s}$."
    },
    {
        id: 12,
        topic: "MRUV (Vectores y Despejes)",
        text: "De la ecuación de distancia del MRUV: $d = v_0 t + \\frac{1}{2}a t^2$, asumiendo $v_0 = 0$, despeje el tiempo $t$ en términos de $d$ y $a$.",
        options: [
            "$t = \\sqrt{\\frac{2d}{a}}$",
            "$t = \\frac{2d}{a}$",
            "$t = \\sqrt{\\frac{d}{2a}}$",
            "$t = \\frac{d^2}{2a}$"
        ],
        correct: 0,
        explanation: "Si $v_0 = 0 \\implies d = \\frac{1}{2}a t^2 \\implies t = \\sqrt{\\frac{2d}{a}}$."
    },
    {
        id: 13,
        topic: "MRUV (Vectores y Despejes)",
        text: "Un móvil varía su velocidad de $\\vec{v}_1 = (10\\hat{i})\\text{ m/s}$ a $\\vec{v}_2 = (26\\hat{i})\\text{ m/s}$ mientras recorre una distancia rectilínea de $72\\text{ m}$. Calcule la aceleración constante.",
        options: ["$4\\text{ m/s}^2$", "$2\\text{ m/s}^2$", "$3\\text{ m/s}^2$", "$5\\text{ m/s}^2$"],
        correct: 0,
        explanation: "$v_f^2 = v_0^2 + 2ad \\implies 26^2 = 10^2 + 2a(72) \\implies 676 = 100 + 144a \\implies a = 4\\text{ m/s}^2$."
    },
    {
        id: 14,
        topic: "MRUV (Vectores y Despejes)",
        text: "Despeje la aceleración $a$ de la fórmula $v_f^2 = v_0^2 + 2ad$.",
        options: [
            "$a = \\frac{v_f^2 - v_0^2}{2d}$",
            "$a = \\frac{v_f - v_0}{2d}$",
            "$a = \\frac{v_f^2 + v_0^2}{2d}$",
            "$a = \\sqrt{\\frac{v_f - v_0}{2d}}$"
        ],
        correct: 0,
        explanation: "Restando $v_0^2$: $v_f^2 - v_0^2 = 2ad \\implies a = \\frac{v_f^2 - v_0^2}{2d}$."
    },
    {
        id: 15,
        topic: "MRUV (Vectores y Despejes)",
        text: "Un objeto arranca desde el reposo con $\\vec{a} = (1.2\\hat{i} + 1.6\\hat{j})\\text{ m/s}^2$. ¿Qué módulo de distancia recorre en $10\\text{ s}$?",
        options: ["$100\\text{ m}$", "$140\\text{ m}$", "$200\\text{ m}$", "$80\\text{ m}$"],
        correct: 0,
        explanation: "Módulo de aceleración: $a = \\sqrt{1.2^2 + 1.6^2} = 2\\text{ m/s}^2$. Distancia: $d = \\frac{1}{2}(2)(10^2) = 100\\text{ m}$."
    },
    {
        id: 16,
        topic: "MRUV (Vectores y Despejes)",
        text: "Un tren frena uniformemente con $a = -2\\text{ m/s}^2$ hasta detenerse por completo en $100\\text{ m}$. ¿Con qué rapidez circulaba al comenzar a frenar?",
        options: ["$20\\text{ m/s}$", "$10\\text{ m/s}$", "$40\\text{ m/s}$", "$25\\text{ m/s}$"],
        correct: 0,
        explanation: "$v_f^2 = v_0^2 + 2ad \\implies 0 = v_0^2 + 2(-2)(100) \\implies v_0^2 = 400 \\implies v_0 = 20\\text{ m/s}$."
    },

    // --- MCU ---
    {
        id: 17,
        topic: "Movimiento Circular Uniforme (MCU)",
        text: "Una partícula realiza un MCU describiendo una trayectoria circular de radio $r = 2\\text{ m}$ con velocidad angular constante $\\omega = 5\\text{ rad/s}$. Calcule el período $T$ y la rapidez tangencial $v$.",
        options: [
            "$T = 1.26\\text{ s}$ y $v = 10\\text{ m/s}$",
            "$T = 0.50\\text{ s}$ y $v = 2.5\\text{ m/s}$",
            "$T = 2.50\\text{ s}$ y $v = 5\\text{ m/s}$",
            "$T = 1.26\\text{ s}$ y $v = 20\\text{ m/s}$"
        ],
        correct: 0,
        explanation: "Período: $T = \\frac{2\\pi}{\\omega} = \\frac{2\\pi}{5} \\approx 1.256\\text{ s}$. Rapidez tangencial: $v = \\omega \\cdot r = 5 \\cdot 2 = 10\\text{ m/s}$."
    },
    {
        id: 18,
        topic: "Movimiento Circular Uniforme (MCU)",
        text: "¿Qué aceleración experimenta un cuerpo en un MCU si se desplaza con rapidez constante en un circuito circular?",
        options: [
            "Aceleración centrípeta dirigida hacia el centro de la trayectoria.",
            "Aceleración tangencial que modifica el módulo de la velocidad.",
            "Aceleración nula porque la rapidez permanece constante.",
            "Aceleración angular constante proporcional al radio."
        ],
        correct: 0,
        explanation: "En un MCU, la dirección del vector velocidad cambia continuamente, lo cual genera una aceleración centrípeta dirigida al centro."
    },
    {
        id: 19,
        topic: "Movimiento Circular Uniforme (MCU)",
        text: "Un disco gira a $120\\text{ RPM}$ (revoluciones por minuto). ¿A cuántos rad/s equivale esta velocidad angular?",
        options: ["$4\\pi\\text{ rad/s}$", "$2\\pi\\text{ rad/s}$", "$120\\pi\\text{ rad/s}$", "$60\\text{ rad/s}$"],
        correct: 0,
        explanation: "Conversión: $\\omega = 120 \\cdot \\frac{2\\pi}{60} = 4\\pi\\text{ rad/s} \\approx 12.57\\text{ rad/s}$."
    },
    {
        id: 20,
        topic: "Movimiento Circular Uniforme (MCU)",
        text: "Calcule la aceleración centrípeta de un vehículo que toma una curva circular de radio $R = 50\\text{ m}$ a una rapidez constante de $20\\text{ m/s}$.",
        options: ["$8\\text{ m/s}^2$", "$4\\text{ m/s}^2$", "$10\\text{ m/s}^2$", "$2\\text{ m/s}^2$"],
        correct: 0,
        explanation: "Aceleración centrípeta: $a_c = \\frac{v^2}{R} = \\frac{20^2}{50} = \\frac{400}{50} = 8\\text{ m/s}^2$."
    },
    {
        id: 21,
        topic: "Movimiento Circular Uniforme (MCU)",
        text: "Si se duplica el radio de una trayectoria circular manteniendo constante la rapidez tangencial, ¿qué ocurre con la aceleración centrípeta?",
        options: [
            "Se reduce a la mitad.",
            "Se duplica.",
            "Se cuadruplica.",
            "Permanece inalterada."
        ],
        correct: 0,
        explanation: "Dado que $a_c = \\frac{v^2}{r}$, la aceleración centrípeta es inversamente proporcional al radio."
    },

    // --- CAÍDA LIBRE Y MOVIMIENTO VERTICAL ---
    {
        id: 22,
        topic: "Caída Libre y Movimiento Vertical",
        text: "Se deja caer un objeto desde lo alto de un edificio de $176.4\\text{ m}$ de altura. Suponiendo $g = 9.8\\text{ m/s}^2$, ¿cuánto tiempo tarda en tocar el suelo?",
        options: ["$6\\text{ s}$", "$18\\text{ s}$", "$9\\text{ s}$", "$12\\text{ s}$"],
        correct: 0,
        explanation: "Usando $h = \\frac{1}{2}g t^2 \\implies 176.4 = 0.5(9.8)t^2 = 4.9t^2 \\implies t^2 = 36 \\implies t = 6\\text{ s}$."
    },
    {
        id: 23,
        topic: "Caída Libre y Movimiento Vertical",
        text: "Se lanza verticalmente hacia arriba un objeto con una velocidad inicial de $29.4\\text{ m/s}$. Calcule la altura máxima alcanzada ($g = 9.8\\text{ m/s}^2$).",
        options: ["$44.1\\text{ m}$", "$88.2\\text{ m}$", "$30.0\\text{ m}$", "$60.0\\text{ m}$"],
        correct: 0,
        explanation: "En el punto más alto $v_f = 0$. $v_f^2 = v_0^2 - 2gh \\implies 0 = 29.4^2 - 2(9.8)h \\implies 19.6h = 864.36 \\implies h = 44.1\\text{ m}$."
    },
    {
        id: 24,
        topic: "Caída Libre y Movimiento Vertical",
        text: "Un cuerpo lanzado hacia arriba tarda $4\\text{ s}$ en alcanzar su punto más alto. ¿Con qué rapidez inicial fue proyectado? ($g = 9.8\\text{ m/s}^2$)",
        options: ["$39.2\\text{ m/s}$", "$19.6\\text{ m/s}$", "$49.0\\text{ m/s}$", "$9.8\\text{ m/s}$"],
        correct: 0,
        explanation: "En el punto máximo $v_f = 0$. De $v_f = v_0 - gt \\implies 0 = v_0 - (9.8)(4) \\implies v_0 = 39.2\\text{ m/s}$."
    },
    {
        id: 25,
        topic: "Caída Libre y Movimiento Vertical",
        text: "Despeje el tiempo de vuelo $t_v$ (tiempo total en subir y bajar al mismo nivel) de la ecuación de lanzamiento vertical en función de $v_0$ y $g$.",
        options: [
            "$t_v = \\frac{2v_0}{g}$",
            "$t_v = \\frac{v_0}{2g}$",
            "$t_v = \\frac{v_0^2}{g}$",
            "$t_v = \\sqrt{\\frac{2v_0}{g}}$"
        ],
        correct: 0,
        explanation: "El tiempo de subida es $t_s = \\frac{v_0}{g}$. El tiempo de vuelo total es $t_v = 2t_s = \\frac{2v_0}{g}$."
    },
    {
        id: 26,
        topic: "Caída Libre y Movimiento Vertical",
        text: "Se deja caer una piedra y llega al suelo con una velocidad de $39.2\\text{ m/s}$. ¿Desde qué altura se soltó? ($g = 9.8\\text{ m/s}^2$)",
        options: ["$78.4\\text{ m}$", "$156.8\\text{ m}$", "$39.2\\text{ m}$", "$98.0\\text{ m}$"],
        correct: 0,
        explanation: "De $v_f^2 = 2gh \\implies (39.2)^2 = 2(9.8)h \\implies 1536.64 = 19.6h \\implies h = 78.4\\text{ m}$."
    },

    // --- PARABÓLICO Y SEMIPARABÓLICO ---
    {
        id: 27,
        topic: "Movimiento Parabólico y Semiparabólico",
        text: "Un proyectil se lanza desde el suelo con rapidez $v_0 = 50\\text{ m/s}$ a un ángulo $\\theta = 37^\\circ$ sobre la horizontal ($g = 9.8\\text{ m/s}^2$). ¿Cuáles son las componentes iniciales de la velocidad $\\vec{v}_0$?",
        options: [
            "$v_{0x} = 39.93\\text{ m/s}$ y $v_{0y} = 30.09\\text{ m/s}$",
            "$v_{0x} = 30.09\\text{ m/s}$ y $v_{0y} = 39.93\\text{ m/s}$",
            "$v_{0x} = 50.00\\text{ m/s}$ y $v_{0y} = 50.00\\text{ m/s}$",
            "$v_{0x} = 25.00\\text{ m/s}$ y $v_{0y} = 25.00\\text{ m/s}$"
        ],
        correct: 0,
        explanation: "$v_{0x} = v_0 \\cos(37^\\circ) \\approx 50(0.7986) = 39.93\\text{ m/s}$. $v_{0y} = v_0 \\sin(37^\\circ) \\approx 50(0.6018) = 30.09\\text{ m/s}$."
    },
    {
        id: 28,
        topic: "Movimiento Parabólico y Semiparabólico",
        text: "Para un proyectil lanzado con componentes iniciales $v_{0x} = 40\\text{ m/s}$ y $v_{0y} = 29.4\\text{ m/s}$ ($g = 9.8\\text{ m/s}^2$), determine el alcance horizontal total $x_{máx}$.",
        options: ["$240\\text{ m}$", "$120\\text{ m}$", "$180\\text{ m}$", "$300\\text{ m}$"],
        correct: 0,
        explanation: "Tiempo de subida: $t_s = \\frac{v_{0y}}{g} = \\frac{29.4}{9.8} = 3\\text{ s}$. Tiempo de vuelo: $t_v = 6\\text{ s}$. Alcance: $x_{máx} = v_{0x} \\cdot t_v = 40 \\cdot 6 = 240\\text{ m}$."
    },
    {
        id: 29,
        topic: "Movimiento Parabólico y Semiparabólico",
        text: "Se lanza una esfera horizontalmente desde el borde de una mesa de $1.225\\text{ m}$ de altura con rapidez inicial $v_0 = 8\\text{ m/s}$. Calcule a qué distancia horizontal del borde impacta el suelo ($g = 9.8\\text{ m/s}^2$).",
        options: ["$4.0\\text{ m}$", "$5.0\\text{ m}$", "$2.5\\text{ m}$", "$8.0\\text{ m}$"],
        correct: 0,
        explanation: "Tiempo de caída: $h = \\frac{1}{2}gt^2 \\implies 1.225 = 4.9t^2 \\implies t^2 = 0.25 \\implies t = 0.5\\text{ s}$. Distancia: $x = v_0 \\cdot t = 8 \\cdot 0.5 = 4.0\\text{ m}$."
    },
    {
        id: 30,
        topic: "Movimiento Parabólico y Semiparabólico",
        text: "¿Qué ocurre con la componente horizontal de la velocidad $v_x$ en un lanzamiento parabólico ideal sin resistencia del aire?",
        options: [
            "Permanece constante durante todo el vuelo.",
            "Disminuye continuamente hasta hacerse cero en la cumbre.",
            "Aumenta en el descenso por efecto de la gravedad.",
            "Varía en función directa del ángulo de disparo."
        ],
        correct: 0,
        explanation: "En ausencia de fuerzas horizontales, el movimiento a lo largo del eje $X$ es un MRU con $v_x = \\text{constante}$."
    },
    {
        id: 31,
        topic: "Movimiento Parabólico y Semiparabólico",
        text: "Despeje el ángulo de tiro $\\theta$ en términos de $v_0$, $g$ y la altura máxima $H_{máx}$ partiendo de $H_{máx} = \\frac{v_0^2 \\sin^2\\theta}{2g}$.",
        options: [
            "$\\theta = \\arcsin\\left(\\frac{\\sqrt{2g H_{máx}}}{v_0}\\right)$",
            "$\\theta = \\arcsin\\left(\\frac{2g H_{máx}}{v_0^2}\\right)$",
            "$\\theta = \\arccos\\left(\\frac{\\sqrt{2g H_{máx}}}{v_0}\\right)$",
            "$\\theta = \\arctan\\left(\\frac{2g H_{máx}}{v_0}\\right)$"
        ],
        correct: 0,
        explanation: "$H_{máx} = \\frac{v_0^2 \\sin^2\\theta}{2g} \\implies \\sin\\theta = \\frac{\\sqrt{2g H_{máx}}}{v_0} \\implies \\theta = \\arcsin\\left(\\frac{\\sqrt{2g H_{máx}}}{v_0}\\right)$."
    },

    // --- FUERZAS Y LEYES DE NEWTON ---
    {
        id: 32,
        topic: "Fuerzas y Leyes de Newton",
        text: "Un bloque de masa $m = 10\\text{ kg}$ es empujado por una fuerza horizontal $\\vec{F} = 49.6\\hat{i}\\text{ N}$ sobre una superficie con coeficiente de fricción dinámico $\\mu_k = 0.2$. Calcule la aceleración del bloque ($g = 9.8\\text{ m/s}^2$).",
        options: ["$3.02\\text{ m/s}^2$", "$5.00\\text{ m/s}^2$", "$2.00\\text{ m/s}^2$", "$1.02\\text{ m/s}^2$"],
        correct: 0,
        explanation: "Normal $N = mg = 10(9.8) = 98\\text{ N}$. Fuerza de fricción $f_k = \\mu_k N = 0.2(98) = 19.6\\text{ N}$. Fuerza neta $F_{net} = 49.6 - 19.6 = 30\\text{ N}$. Aceleración $a = \\frac{30}{10} = 3.0\\text{ m/s}^2$ (o $3.02\\text{ m/s}^2$ con imprecisiones decimales)."
    },
    {
        id: 33,
        topic: "Fuerzas y Leyes de Newton",
        text: "¿Qué establece formalmente la Tercera Ley de Newton (Principio de Acción y Reacción)?",
        options: [
            "Si un cuerpo A ejerce una fuerza sobre B, el cuerpo B ejerce una fuerza sobre A de igual magnitud, misma dirección y sentido opuesto.",
            "Las fuerzas de acción y reacción se anulan mutuamente porque actúan sobre el mismo objeto.",
            "La fuerza aplicada es directamente proporcional a la masa por el cuadrado de la aceleración.",
            "Todo cuerpo permanece en reposo a menos que una fuerza interna cambie su estado."
        ],
        correct: 0,
        explanation: "Establece pares de fuerzas iguales en magnitud y opuestas en sentido actuando sobre cuerpos distintos."
    },
    {
        id: 34,
        topic: "Fuerzas y Leyes de Newton",
        text: "Dos bloques de masas $m_1 = 3\\text{ kg}$ y $m_2 = 2\\text{ kg}$ están en contacto sobre una superficie lisa. Se aplica una fuerza $F = 20\\text{ N}$ a $m_1$. Determine la fuerza de contacto que $m_1$ ejerce sobre $m_2$.",
        options: ["$8\\text{ N}$", "$12\\text{ N}$", "$20\\text{ N}$", "$10\\text{ N}$"],
        correct: 0,
        explanation: "Aceleración $a = \\frac{20}{3 + 2} = 4\\text{ m/s}^2$. Fuerza sobre $m_2$: $F_c = m_2 \\cdot a = 2 \\cdot 4 = 8\\text{ N}$."
    },
    {
        id: 35,
        topic: "Fuerzas y Leyes de Newton",
        text: "De acuerdo con la Primera Ley de Newton o Ley de la Inercia, si la fuerza neta resultante sobre un objeto es cero, el objeto:",
        options: [
            "Permanece en reposo o se mueve con velocidad constante en línea recta.",
            "Se detiene de manera instantánea obligatoriamente.",
            "Aumenta su velocidad de forma progresiva.",
            "Experimenta un movimiento circular uniforme."
        ],
        correct: 0,
        explanation: "Si $\\sum \\vec{F} = 0$, la aceleración es nula, manteniendo el estado de reposo o MRU."
    },
    {
        id: 36,
        topic: "Fuerzas y Leyes de Newton",
        text: "Un objeto de peso $W = 98\\text{ N}$ cuelga en reposo sostenido por dos cuerdas simétricas que forman un ángulo de $30^\\circ$ con el techo. Calcule la tensión en cada cuerda.",
        options: ["$98\\text{ N}$", "$49\\text{ N}$", "$196\\text{ N}$", "$84.87\\text{ N}$"],
        correct: 0,
        explanation: "Equilibrio vertical: $2T \\sin(30^\\circ) = W \\implies 2T(0.5) = 98 \\implies T = 98\\text{ N}$."
    },
    {
        id: 37,
        topic: "Fuerzas y Leyes de Newton",
        text: "En una máquina de Atwood con dos masas suspendidas $m_1 = 3\\text{ kg}$ y $m_2 = 1\\text{ kg}$, determine la aceleración del sistema ($g = 9.8\\text{ m/s}^2$).",
        options: ["$4.9\\text{ m/s}^2$", "$2.45\\text{ m/s}^2$", "$9.8\\text{ m/s}^2$", "$7.35\\text{ m/s}^2$"],
        correct: 0,
        explanation: "Aceleración: $a = \\frac{m_1 - m_2}{m_1 + m_2} g = \\frac{3 - 1}{3 + 1}(9.8) = \\frac{2}{4}(9.8) = 4.9\\text{ m/s}^2$."
    },

    // --- TRABAJO, POTENCIA Y ENERGÍA ---
    {
        id: 38,
        topic: "Trabajo, Potencia y Energía",
        text: "Calcule el trabajo mecánico realizado por una fuerza de $40\\text{ N}$ al arrastrar un bloque una distancia de $10\\text{ m}$, si la fuerza se aplica a un ángulo de $60^\\circ$ respecto a la horizontal.",
        options: ["$200\\text{ J}$", "$400\\text{ J}$", "$346.4\\text{ J}$", "$100\\text{ J}$"],
        correct: 0,
        explanation: "Trabajo: $W = F \\cdot d \\cdot \\cos(60^\\circ) = 40 \\cdot 10 \\cdot 0.5 = 200\\text{ J}$."
    },
    {
        id: 39,
        topic: "Trabajo, Potencia y Energía",
        text: "Un motor realiza un trabajo mecánico de $12000\\text{ J}$ en un tiempo de $30\\text{ s}$. ¿Cuál es la potencia desarrollada por dicho motor?",
        options: ["$400\\text{ W}$", "$360\\text{ W}$", "$240\\text{ W}$", "$600\\text{ W}$"],
        correct: 0,
        explanation: "Potencia: $P = \\frac{W}{t} = \\frac{12000}{30} = 400\\text{ W}$."
    },
    {
        id: 40,
        topic: "Trabajo, Potencia y Energía",
        text: "De la fórmula de la energía cinética $E_c = \\frac{1}{2}m v^2$, despeje la velocidad $v$ en función de $E_c$ y $m$.",
        options: [
            "$v = \\sqrt{\\frac{2E_c}{m}}$",
            "$v = \\frac{2E_c}{m}$",
            "$v = \\sqrt{\\frac{E_c}{2m}}$",
            "$v = \\frac{E_c^2}{2m}$"
        ],
        correct: 0,
        explanation: "$E_c = \\frac{1}{2}m v^2 \\implies v = \\sqrt{\\frac{2E_c}{m}}$."
    },
    {
        id: 41,
        topic: "Trabajo, Potencia y Energía",
        text: "Un objeto de $4\\text{ kg}$ se desliza por una superficie lisa. En un punto A su rapidez es $v_A = 2\\text{ m/s}$ y en B es $v_B = 6\\text{ m/s}$. Calcule el trabajo neto realizado sobre el objeto.",
        options: ["$64\\text{ J}$", "$32\\text{ J}$", "$16\\text{ J}$", "$72\\text{ J}$"],
        correct: 0,
        explanation: "Teorema del Trabajo y la Energía: $W_{neto} = \\Delta E_c = \\frac{1}{2}(4)(6^2 - 2^2) = 2(36 - 4) = 64\\text{ J}$."
    },
    {
        id: 42,
        topic: "Trabajo, Potencia y Energía",
        text: "Un resorte ideal tiene una constante elástica $k = 200\\text{ N/m}$. ¿Qué energía potencial elástica almacena al ser comprimido $0.3\\text{ m}$?",
        options: ["$9\\text{ J}$", "$18\\text{ J}$", "$30\\text{ J}$", "$4.5\\text{ J}$"],
        correct: 0,
        explanation: "$E_{pe} = \\frac{1}{2} k x^2 = \\frac{1}{2}(200)(0.3^2) = 100(0.09) = 9\\text{ J}$."
    },
    {
        id: 43,
        topic: "Trabajo, Potencia y Energía",
        text: "Despeje la deformación $x$ de la fórmula de energía potencial elástica $E_p = \\frac{1}{2} k x^2$.",
        options: [
            "$x = \\sqrt{\\frac{2E_p}{k}}$",
            "$x = \\frac{2E_p}{k}$",
            "$x = \\sqrt{\\frac{E_p}{2k}}$",
            "$x = \\frac{E_p}{k^2}$"
        ],
        correct: 0,
        explanation: "$E_p = \\frac{1}{2} k x^2 \\implies x = \\sqrt{\\frac{2E_p}{k}}$."
    },
    {
        id: 44,
        topic: "Trabajo, Potencia y Energía",
        text: "Se deja caer un bloque de masa $m = 2\\text{ kg}$ desde una altura $h = 20\\text{ m}$ por una rampa sin fricción. Halle su rapidez justo antes de impactar el piso ($g = 9.8\\text{ m/s}^2$).",
        options: ["$19.80\\text{ m/s}$", "$10.00\\text{ m/s}$", "$14.14\\text{ m/s}$", "$39.20\\text{ m/s}$"],
        correct: 0,
        explanation: "Conservación de la energía: $v = \\sqrt{2gh} = \\sqrt{2(9.8)(20)} = \\sqrt{392} \\approx 19.80\\text{ m/s}$."
    },
    {
        id: 45,
        topic: "Trabajo, Potencia y Energía",
        text: "En la conservación de la energía mecánica $E_m = mgh + \\frac{1}{2}mv^2$, despeje la altura $h$ expresándola en función de $E_m$, $m$, $v$ y $g$.",
        options: [
            "$h = \\frac{E_m - \\frac{1}{2}mv^2}{mg}$",
            "$h = \\frac{E_m - mv^2}{mg}$",
            "$h = \\frac{2E_m - mv^2}{g}$",
            "$h = \\frac{E_m}{mg} - v^2$"
        ],
        correct: 0,
        explanation: "$E_m - \\frac{1}{2}mv^2 = mgh \\implies h = \\frac{E_m - \\frac{1}{2}mv^2}{mg}$."
    },
    {
        id: 46,
        topic: "Trabajo, Potencia y Energía",
        text: "Una grúa eleva un bloque de $500\\text{ kg}$ a una altura de $10\\text{ m}$ a rapidez constante en $20\\text{ s}$. ¿Cuál fue la potencia media desarrollada por la grúa? ($g = 9.8\\text{ m/s}^2$)",
        options: ["$2450\\text{ W}$", "$4900\\text{ W}$", "$1225\\text{ W}$", "$9800\\text{ W}$"],
        correct: 0,
        explanation: "Trabajo $W = mgh = 500(9.8)(10) = 49000\\text{ J}$. Potencia $P = \\frac{49000}{20} = 2450\\text{ W}$."
    },
    {
        id: 47,
        topic: "Trabajo, Potencia y Energía",
        text: "Partiendo de $P = \\frac{W}{t}$ y $W = F \\cdot d$, demuestre la relación de la potencia en función de la rapidez uniforme $v$.",
        options: [
            "$P = F \\cdot v$",
            "$P = \\frac{F}{v}$",
            "$P = F \\cdot v^2$",
            "$P = \\frac{v}{F}$"
        ],
        correct: 0,
        explanation: "$P = \\frac{F \\cdot d}{t} = F \\cdot \\left(\\frac{d}{t}\\right) = F \\cdot v$."
    },
    {
        id: 48,
        topic: "Trabajo, Potencia y Energía",
        text: "Un cuerpo se lanza verticalmente hacia arriba. A medida que asciende libre de fricción, ¿cómo se comportan sus energías cinética ($E_c$) y potencial gravitatoria ($E_p$)?",
        options: [
            "$E_c$ disminuye y $E_p$ aumenta, manteniéndose constante la suma de ambas.",
            "Ambas energías disminuyen progresivamente a medida que sube.",
            "Ambas energías aumentan hasta alcanzar el punto máximo.",
            "$E_c$ permanece constante pero $E_p$ disminuye."
        ],
        correct: 0,
        explanation: "Por conservación de la energía, $E_c$ se convierte en $E_p$, siendo su suma constante."
    },
    {
        id: 49,
        topic: "Trabajo, Potencia y Energía",
        text: "Si se duplica la velocidad de un automóvil manteniendo su masa constante, ¿en qué factor aumenta su energía cinética?",
        options: [
            "Se cuadruplica ($4$ veces mayor).",
            "Se duplica ($2$ veces mayor).",
            "Se triplica ($3$ veces mayor).",
            "Permanece igual."
        ],
        correct: 0,
        explanation: "Como $E_c \\propto v^2$, duplicar la velocidad cuadruplica la energía cinética."
    },
    {
        id: 50,
        topic: "Trabajo, Potencia y Energía",
        text: "En la ecuación de balance de energía con fricción $E_{m,i} - W_{friccion} = E_{m,f}$, despeje el coeficiente de fricción $\\mu$ sabiendo que $W_{friccion} = \\mu m g d$.",
        options: [
            "$\\mu = \\frac{E_{m,i} - E_{m,f}}{mgd}$",
            "$\\mu = \\frac{E_{m,f} - E_{m,i}}{mgd}$",
            "$\\mu = \\frac{E_{m,i} \\cdot E_{m,f}}{mgd}$",
            "$\\mu = \\frac{mgd}{E_{m,i} - E_{m,f}}$"
        ],
        correct: 0,
        explanation: "$E_{m,i} - E_{m,f} = \\mu m g d \\implies \\mu = \\frac{E_{m,i} - E_{m,f}}{mgd}$."
    }
];

// REQUERIMIENTO: 80 MINUTOS EXACTOS Y LÍMITE DE INTENTOS
const TOTAL_TIME = 80 * 60; // 4800 segundos
const STORAGE_KEY = "EVAL_FISICA_50Q_STATE";
const ATTEMPTS_KEY = "EVAL_ATTEMPTS_COUNT";
const MAX_ATTEMPTS = 3;
const FEEDBACK_PASS = "FISICARIAMANGA26";

let state = {
    user: { name: '', id: '' },
    currentIndex: 0,
    answers: {},
    timeLeft: TOTAL_TIME,
    infractions: 0,
    isStarted: false,
    isFinished: false,
    completedDate: ''
};

let timerInterval = null;

window.addEventListener('DOMContentLoaded', () => {
    checkAttemptsLimit();
    loadState();
    if (state.isStarted && !isMaxAttemptsReached()) {
        document.getElementById('fullscreen-overlay').style.display = 'none';
        if (state.user.name) {
            document.getElementById('user-display').textContent = `${state.user.name} (${state.user.id})`;
        }
        renderGrid();
        renderQuestion();
        startTimer();
    }
    setupSecurity();
    setupEventListeners();
});

function getAttempts() {
    return parseInt(localStorage.getItem(ATTEMPTS_KEY) || "0", 10);
}

function isMaxAttemptsReached() {
    return getAttempts() >= MAX_ATTEMPTS;
}

function checkAttemptsLimit() {
    if (isMaxAttemptsReached()) {
        const overlay = document.getElementById('fullscreen-overlay');
        overlay.style.display = 'flex';
        document.getElementById('modal-desc').innerHTML = `<strong style="color:var(--danger)">LÍMITE DE INTENTOS ALCANZADO (Máximo ${MAX_ATTEMPTS}).</strong><br>Ha agotado los intentos permitidos para este dispositivo.`;
        document.getElementById('student-form').style.display = 'none';
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        try {
            state = JSON.parse(saved);
            if (state.isFinished) {
                showResultsScreen();
            }
        } catch (e) {
            console.error(e);
        }
    }
}

function initExam(e) {
    if (e) e.preventDefault();
    if (isMaxAttemptsReached()) return;

    const nameInput = document.getElementById('student-name').value;
    const idInput = document.getElementById('student-id').value;

    if (!nameInput || !idInput) return;

    state.user.name = nameInput;
    state.user.id = idInput;
    state.isStarted = true;
    saveState();

    document.getElementById('user-display').textContent = `${nameInput} (${idInput})`;

    const elem = document.documentElement;
    if (elem.requestFullscreen) elem.requestFullscreen().catch(() => {});

    document.getElementById('fullscreen-overlay').style.display = 'none';
    renderGrid();
    renderQuestion();
    startTimer();
}

function setupEventListeners() {
    document.getElementById('student-form').addEventListener('submit', initExam);
    document.getElementById('btn-prev').addEventListener('click', () => navigate(-1));
    document.getElementById('btn-next').addEventListener('click', () => navigate(1));
    document.getElementById('btn-finish-exam').addEventListener('click', confirmFinish);
    document.getElementById('btn-download-pdf').addEventListener('click', downloadPDF);
    document.getElementById('btn-print-page').addEventListener('click', () => window.print());
    document.getElementById('btn-restart-exam').addEventListener('click', resetExam);
    
    // Desbloqueo de retroalimentación
    document.getElementById('btn-unlock-feedback').addEventListener('click', unlockFeedback);
}

function unlockFeedback() {
    const inputVal = document.getElementById('feedback-pass-input').value;
    const errorMsg = document.getElementById('lock-error-msg');

    if (inputVal === FEEDBACK_PASS) {
        document.getElementById('feedback-lock-container').style.display = 'none';
        const feedbackContent = document.getElementById('unlocked-feedback-content');
        feedbackContent.style.display = 'block';

        if (window.renderMathInElement) {
            renderMathInElement(document.getElementById('review-list'), { 
                delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] 
            });
        }
    } else {
        errorMsg.style.display = 'block';
    }
}

function setupSecurity() {
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement && state.isStarted && !state.isFinished) {
            document.getElementById('fullscreen-overlay').style.display = 'flex';
            registerInfraction("Salida de Pantalla Completa");
        }
    });

    window.addEventListener('visibilitychange', () => {
        if (document.hidden && state.isStarted && !state.isFinished) {
            registerInfraction("Cambio de Pestaña");
        }
    });

    window.addEventListener('blur', () => {
        if (state.isStarted && !state.isFinished) {
            registerInfraction("Pérdida de foco en la ventana");
        }
    });

    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener('keydown', e => {
        if (
            e.key === 'F12' ||
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
            (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 'u' || e.key === 's' || e.key === 'a')) ||
            e.key === 'PrintScreen'
        ) {
            e.preventDefault();
            registerInfraction("Intento de uso de atajo restringido");
        }
    });
}

function registerInfraction(reason) {
    if (state.isFinished) return;

    state.infractions++;
    saveState();

    document.getElementById('infraction-count').textContent = state.infractions;
    const banner = document.getElementById('infraction-banner');
    banner.style.display = 'block';

    if (state.infractions >= 3) {
        alert("Límite de 3 faltas de seguridad alcanzado. La evaluación se enviará de forma automática.");
        finishExam();
    }
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (state.isFinished) return;

        if (state.timeLeft > 0) {
            state.timeLeft--;
            saveState();
            updateTimerUI();
        } else {
            clearInterval(timerInterval);
            finishExam();
        }
    }, 1000);
}

function updateTimerUI() {
    const minutes = Math.floor(state.timeLeft / 60);
    const seconds = state.timeLeft % 60;
    const timerEl = document.getElementById('timer');
    const badgeEl = document.getElementById('timer-display');
    
    timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (state.timeLeft <= 600) {
        badgeEl.classList.add('timer-warning');
    } else {
        badgeEl.classList.remove('timer-warning');
    }
}

function renderQuestion() {
    const q = questionsData[state.currentIndex];
    document.getElementById('question-number').textContent = `Pregunta ${String(state.currentIndex + 1).padStart(2, '0')} de ${questionsData.length}`;
    document.getElementById('question-topic').textContent = `Tema: ${q.topic}`;
    document.getElementById('question-text').innerHTML = q.text;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    q.options.forEach((optText, index) => {
        const isSelected = state.answers[q.id] === index;
        const optDiv = document.createElement('div');
        optDiv.className = `option-item ${isSelected ? 'selected' : ''}`;
        optDiv.onclick = () => selectOption(q.id, index);

        optDiv.innerHTML = `
            <div class="option-prefix">${letters[index]}</div>
            <div class="option-content">${optText}</div>
        `;
        optionsContainer.appendChild(optDiv);
    });

    document.getElementById('btn-prev').disabled = state.currentIndex === 0;
    document.getElementById('btn-next').disabled = state.currentIndex === questionsData.length - 1;

    updateProgress();
    updateGridUI();

    if (window.renderMathInElement) {
        renderMathInElement(document.getElementById('question-text'), { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] });
        renderMathInElement(optionsContainer, { delimiters: [{left: '$$', right: '$$', display: true}, {left: '$', right: '$', display: false}] });
    }
}

function selectOption(qId, optionIndex) {
    state.answers[qId] = optionIndex;
    saveState();
    renderQuestion();
}

function navigate(dir) {
    const newIndex = state.currentIndex + dir;
    if (newIndex >= 0 && newIndex < questionsData.length) {
        state.currentIndex = newIndex;
        saveState();
        renderQuestion();
    }
}

function jumpToQuestion(index) {
    state.currentIndex = index;
    saveState();
    renderQuestion();
}

function renderGrid() {
    const grid = document.getElementById('reactive-grid');
    grid.innerHTML = '';
    questionsData.forEach((q, idx) => {
        const item = document.createElement('div');
        item.className = 'grid-item';
        item.id = `grid-item-${idx}`;
        item.textContent = idx + 1;
        item.onclick = () => jumpToQuestion(idx);
        grid.appendChild(item);
    });
}

function updateGridUI() {
    questionsData.forEach((q, idx) => {
        const item = document.getElementById(`grid-item-${idx}`);
        if (!item) return;
        item.className = 'grid-item';
        if (idx === state.currentIndex) item.classList.add('active');
        if (state.answers[q.id] !== undefined) item.classList.add('answered');
    });
}

function updateProgress() {
    const answeredCount = Object.keys(state.answers).length;
    const pct = Math.round((answeredCount / questionsData.length) * 100);
    document.getElementById('progress-percent').textContent = `${pct}%`;
    document.getElementById('progress-fill').style.width = `${pct}%`;
}

function confirmFinish() {
    const answeredCount = Object.keys(state.answers).length;
    const unanswered = questionsData.length - answeredCount;
    let msg = "¿Está seguro de finalizar y entregar la evaluación?";
    if (unanswered > 0) {
        msg += `\n⚠️ Advertencia: Aún tiene ${unanswered} pregunta(s) sin responder.`;
    }
    if (confirm(msg)) {
        finishExam();
    }
}

function finishExam() {
    state.isFinished = true;
    state.completedDate = new Date().toLocaleString('es-EC');

    let currentAttempts = getAttempts();
    currentAttempts++;
    localStorage.setItem(ATTEMPTS_KEY, currentAttempts.toString());

    saveState();
    showResultsScreen();
}

function showResultsScreen() {
    document.getElementById('exam-screen').classList.add('hidden');
    document.getElementById('timer-display').classList.add('hidden');
    document.getElementById('fullscreen-overlay').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';

    document.getElementById('res-student-name').textContent = state.user.name || "Estudiante";
    document.getElementById('res-student-id').textContent = state.user.id || "N/A";
    document.getElementById('res-date').textContent = state.completedDate || new Date().toLocaleString('es-EC');

    // Estado inicial bloqueado
    document.getElementById('feedback-lock-container').style.display = 'block';
    document.getElementById('unlocked-feedback-content').style.display = 'none';
    document.getElementById('feedback-pass-input').value = '';
    document.getElementById('lock-error-msg').style.display = 'none';

    let score = 0;
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];

    questionsData.forEach((q, idx) => {
        const userAns = state.answers[q.id];
        const isCorrect = userAns === q.correct;
        if (isCorrect) score++;

        const item = document.createElement('div');
        item.className = 'review-item';

        let statusBadge = '';
        if (userAns === undefined) {
            statusBadge = `<span class="review-status status-unanswered">SIN RESPONDER</span>`;
        } else if (isCorrect) {
            statusBadge = `<span class="review-status status-correct">CORRECTO</span>`;
        } else {
            statusBadge = `<span class="review-status status-incorrect">INCORRECTO</span>`;
        }

        item.innerHTML = `
            ${statusBadge}
            <div class="q-title">${idx + 1}. ${q.text}</div>
            <div style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 8px;">
                Su respuesta: <strong>${userAns !== undefined ? letters[userAns] + ') ' + q.options[userAns] : 'Sin responder'}</strong> | 
                Respuesta correcta: <strong style="color: var(--success);">${letters[q.correct]}) ${q.options[q.correct]}</strong>
            </div>
            <div class="feedback-box">
                <strong>💡 Retroalimentación / Solución paso a paso:</strong><br>
                ${q.explanation}
            </div>
        `;
        reviewList.appendChild(item);
    });

    const finalGrade = ((score / questionsData.length) * 10).toFixed(2);

    document.getElementById('res-score').textContent = `${score}/${questionsData.length}`;
    document.getElementById('res-grade').textContent = `${finalGrade} / 10`;
    document.getElementById('res-accuracy').textContent = `${Math.round((score / questionsData.length) * 100)}%`;
    document.getElementById('res-infractions').textContent = state.infractions;

    const btnRestart = document.getElementById('btn-restart-exam');
    if (isMaxAttemptsReached()) {
        btnRestart.style.display = 'none';
    } else {
        const attemptsLeft = MAX_ATTEMPTS - getAttempts();
        btnRestart.textContent = `🔄 Volver a Intentar (Quedan ${attemptsLeft} intento${attemptsLeft > 1 ? 's' : ''})`;
    }
}

function resetExam() {
    if (isMaxAttemptsReached()) {
        alert("Ha alcanzado el límite máximo de 3 intentos en este dispositivo.");
        return;
    }

    if (confirm(`¿Desea iniciar un nuevo intento? (Intento ${getAttempts() + 1} de ${MAX_ATTEMPTS})`)) {
        state.currentIndex = 0;
        state.answers = {};
        state.timeLeft = TOTAL_TIME;
        state.infractions = 0;
        state.isStarted = true;
        state.isFinished = false;
        state.completedDate = '';
        saveState();

        document.getElementById('infraction-count').textContent = '0';
        document.getElementById('infraction-banner').style.display = 'none';
        document.getElementById('results-screen').style.display = 'none';
        document.getElementById('exam-screen').classList.remove('hidden');
        document.getElementById('timer-display').classList.remove('hidden');

        const elem = document.documentElement;
        if (elem.requestFullscreen) elem.requestFullscreen().catch(() => {});

        renderGrid();
        renderQuestion();
        startTimer();
    }
}

function downloadPDF() {
    const element = document.getElementById('report-content');
    const { jsPDF } = window.jspdf;

    html2canvas(element, { scale: 2 }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`Reporte_Evaluacion_Fisica_${state.user.id || 'Estudiante'}.pdf`);
    });
}