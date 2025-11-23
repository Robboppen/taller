// Datos de los cursos mejorados
const courses = [
    {
        id: 1,
        title: "Mecánica Cuántica 1 - Fundamentos",
        description: "Introducción a los principios básicos de la mecánica cuántica, incluyendo postulados y representaciones.",
        image: "https://blogs-images.forbes.com/startswithabang/files/2018/03/leinie.gif",
        topics: ["Herramientas Matemáticas de QM","Postulados de la mecánica cuántica","Problemas unidimensionales"],
        level: "Avanzado",
        duration: "20 semanas",
        professor: "Dr. Zettili"

    },
    {
        id: 2,
        title: "Introducción a la Relatividad General",
        description: "Introducción a la Relatividad General ",
        image: "https://mymodernmet.com/wp/wp-content/uploads/2019/10/nasa-black-hole-visualization-1.gif",
        topics: ["Análisis vectorial en Relatividad Especial", "Análisis tensorial en Relatividad Especial", "Fluidos Perfectos en Relatividad Especial", "Prefacio a curvatura", "Espacios curvos"],
        level: "Avanzado",
        duration: "20 semanas",
        professor: "Schutz."

    },
    {
        id: 3,
        title: "Introducción a la Mecánica",
        description: "Introducción a los principios básicos de la mecánica newtoniana.",
        image: "https://d3bkbkx82g74b8.cloudfront.net/eyJidWNrZXQiOiJsYWJyb290cy1pbWFnZXMiLCJrZXkiOiJjb250ZW50X3RhZ19wcm9maWxlX2ltYWdlXzI5NTFmMWNhMWY3ODg3ZTU2MGIyMGQ4Yzc0ZTQ3ZDRkYTJlOTU1ZTBfNzkwOS5qcGciLCJlZGl0cyI6eyJ0b0Zvcm1hdCI6ImpwZyIsInJlc2l6ZSI6eyJ3aWR0aCI6ODAwLCJoZWlnaHQiOjQwMCwiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6ImNlbnRlciIsImJhY2tncm91bmQiOiIjZmZmIn0sImZsYXR0ZW4iOnsiYmFja2dyb3VuZCI6IiNmZmYifX19",
        topics: ["Vectores ", "Cinemática 1D, 2D y Rotacional", "Leyes de Movimiento", "Energía y Trabajo"],
        level: "Intermedio",
        duration: "10",
        professor: "Sir Newton"
    },
    {
        id: 4,
        title: "Electromagnetismo",
        description: "Teoría y aplicaciones de los fenómenos electromagnéticos.",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/EM-Wave.gif",
        topics: ["Electrostática", "Magnetostática", "Ecuaciones de Maxwell", "Ondas electromagnéticas"],
        level: "Avanzado",
        duration: "14 semanas",
        professor: "Dr. Maxwell"
    },
    {
        id: 5,
        title: "Introducción a la Cosmología",
        description: "Introducción a las bases teóricas-matemáticas sobre el estudio del universo",
        image: "https://scitechdaily.com/images/Universe-Expansion-Funnel-Animation.gif",
        topics: [ "Leyes de Newton", "Ecuaciones de Friedman", "Parámetro de curvatura"],
        level: "Avanzado",
        duration: "10 semanas",
        professor: "Dr. Lemaitre"
    },
    {
        id: 6,
        title: "Mecánica Intermedia",
        description: "Desarrollo de formalismo Lagrangiano y Hamiltoniano, Fuerzas Centrales, Scattering, Pequeñas Oscilaciones.",
        image: "https://s2.ppllstatics.com/leonoticias/www/multimedia/202203/14/media/cortadas/Emmy%20Noether-kySC-U1601305654175sSE-1248x770@Leonoticias.jpg",
        topics: ["Mecánica Clásica Newtoniana", "Cálculo de Variaciones", "Dinámica Lagrangiana", "Dinámica Hamiltoniana", "Transformaciones Canonicas y Corchetes de Poisson"],
        level: "Avanzado",
        duration: "16 semanas",
        professor: "Fetter & Walecka"
    },
    {
        id: 7,
        title: "Métodos matemáticos para Físicos",
        description: "Estructuras algebraicas fundamentales para la física y matemáticas modernas.",
        image: "https://home.cern/sites/default/files/2021-10/seqD_063%20copy%202.jpg",
        topics: ["Espacios vectoriales", "Transformaciones lineales", "Valores y vectores propios", "Aplicaciones"],
        level: "Avanzado",
        duration: "8 semanas",
        professor: "Dr. Arfken"
    }
    
];




// Función para renderizar los cursos
function renderCourses() {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';

    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';

        courseCard.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <div class="course-info">
                <h2>${course.title}</h2>
                <p>${course.description}</p>
                <div class="course-meta">
                    <span><i class="fas fa-chart-line"></i> Nivel: ${course.level}</span>
                    <span><i class="far fa-clock"></i> Duración: ${course.duration}</span>
                    <span><i class="fas fa-user-graduate"></i> Profesor: ${course.professor}</span>
                </div>
                <h3>Temas principales:</h3>
                <ul>
                    ${course.topics.map(topic => `<li><i class="fas fa-check-circle"></i> ${topic}</li>`).join('')}
                </ul>
                <button onclick="viewCourseDetails(${course.id})">Más información</button>
            </div>
        `;

        container.appendChild(courseCard);
    });
}

// Función para mostrar detalles del curso en un modal
function viewCourseDetails(courseId) {
    const course = courses.find(c => c.id === courseId);
    
    // Crear modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn" onclick="closeModal()">&times;</span>
            <img src="${course.image}" alt="${course.title}">
            <h2>${course.title}</h2>
            <p class="course-description">${course.description}</p>
            
            <div class="modal-details">
                <div>
                    <h3><i class="fas fa-info-circle"></i> Detalles del curso</h3>
                    <p><strong>Nivel:</strong> ${course.level}</p>
                    <p><strong>Duración:</strong> ${course.duration}</p>
                    <p><strong>Profesor:</strong> ${course.professor}</p>
                </div>
                
                <div>
                    <h3><i class="fas fa-book"></i> Temario completo</h3>
                    <ul>
                        ${course.topics.map(topic => `<li>${topic}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <button class="enroll-btn" onclick="enrollInCourse(${course.id})">Inscribirse en el curso</button>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden'; // Evitar scroll cuando el modal está abierto
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Función para inscribirse en un curso
function enrollInCourse(courseId) {
    const coursePages = {
        1: "cursos/mecanica_cuantica.html",
        2: "cursos/GR.html",
        3: "cursos/Introduccion-mecanica.html",
        4: "cursos/electromagnetismo.html",
        5: "cursos/cosmologia_course.html",
        6: "cursos/MecInt.html",
        7: "cursos/MathMethII.html",
        8: "cursos/curso8.html"
    };

    const page = coursePages[courseId];
    if (page) {
        window.location.href = page; // Redirige a la página del curso
    } else {
        alert("Página del curso no encontrada.");
    }
}


// Función para desplazarse a los cursos
function scrollToCourses() {
    document.getElementById('courses-container').scrollIntoView({
        behavior: 'smooth'
    });
}

// Manejar el formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset();
});

// Cerrar modal haciendo clic fuera del contenido
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// Cargar los cursos cuando la página se cargue
document.addEventListener('DOMContentLoaded', function() {
    renderCourses();
    
    // Agregar estilos para el modal dinámicamente
    const style = document.createElement('style');
    style.textContent = `
        .modal {
            display: flex;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            align-items: center;
            justify-content: center;
        }
        
        .modal-content {
            background-color: white;
            padding: 30px;
            border-radius: 10px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
        }
        
        .modal-content img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        .close-btn {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 28px;
            cursor: pointer;
            color: #777;
        }
        
        .close-btn:hover {
            color: #333;
        }
        
        .modal-details {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin: 20px 0;
        }
        
        .enroll-btn {
            background-color: #2ecc71;
            color: white;
            border: none;
            padding: 12px 25px;
            font-size: 1.1rem;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            margin-top: 20px;
            transition: background-color 0.3s;
        }
        
        .enroll-btn:hover {
            background-color: #27ae60;
        }
        
        .course-meta {
            margin: 15px 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
        }
        
        .course-meta span {
            display: flex;
            align-items: center;
            gap: 5px;
            color: #7f8c8d;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .modal-details {
                grid-template-columns: 1fr;
            }
            
            .course-meta {
                grid-template-columns: 1fr;
            }
        }
    `;
    document.head.appendChild(style);
});
