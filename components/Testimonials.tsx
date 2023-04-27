import Image from "next/image";

const testimonials = [
  [
    {
      content: "Remodela.ai ha sido una herramienta clave para sorprender a mis clientes. Ahora puedo mostrarles diferentes opciones de diseño en cuestión de segundos",
      link: "https://twitter.com/eveporcello/status/1631438728999899136",
      author: {
        name: "Ana",
        role: "Diseñadora de interiores.",
        image: "/eve.jpg",
      },
    },

    {
      content:
        "Desde que descubrí Remodela.ai, he sido capaz de encontrar la inspiración que necesitaba para transformar mi hogar en un espacio acogedor y moderno. Es fácil de usar y los resultados son espectaculares",
      link: "https://twitter.com/arthur_dvorkin/status/1631402865209274369",
      author: {
        name: "Juan",
        role: "Propietario de vivienda.",
        image: "/rob1.jpg",
      },
    },
  ],
  [
    {
      content:
        "Como agente inmobiliario, Remodela.ai me ha permitido mostrar a mis clientes el potencial de las propiedades que ofrezco, dándoles una idea clara de cómo pueden verse después de una remodelación. Lo recomiendo ampliamente",
      link: "https://www.tiktok.com/@thenubians/video/7206088336044313861?q=roomgpt.io&t=1677909079689",
      author: {
        name: "Luis",
        role: "Agente inmobiliario.",
        image: "/ade.jpg",
      },
    },
    {
      content:
        "Como estudiante de arquitectura, Remodela.ai ha sido una herramienta valiosa para mi aprendizaje. Me ha permitido experimentar con diferentes diseños y soluciones de manera fácil y rápida. Definitivamente la recomiendo",
      link: "https://twitter.com/RobAttfield/status/1631545265281974273",
      author: {
        name: "Pablo",
        role: "Estudiante de arquitectura.",
        image: "/arthur.jpg",
      },
    },
  ],
  [
    {
      content:
        "Remodela.ai es una herramienta imprescindible para mi empresa constructora. Me permite visualizar diferentes opciones de diseño y presentarlas de manera clara a mis clientes. ¡Los resultados son sorprendentes!",
      link: "https://twitter.com/Music4UsAll/status/1631622608595607552",
      author: {
        name: "José",
        role: "Empresario constructor.",
        image: "/music.jpg",
      },
    },
    {
      content: "Como profesional de la remodelación y la decoración de interiores, Remodela.ai me ayudó a mostrar a los clientes cómo se vería su hogar renovado antes de comenzar la renovación real. ¡Me permitió brindar un servicio excepcional a mis clientes!",
      link: "https://twitter.com/github/status/1631821360619028482",
      author: {
        name: "Teresa",
        role: "TArquitecta",
        image: "/last.png",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
            La tecnología para visualizar nuevos espacios.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
            Descubre porque remodela.ai es la eleccion favorita de muchos.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out "
                  >
                    {/* <a href={testimonial.link} target="_blank" rel="noreferrer"> */}
                    <figure className="relative rounded-2xl bg-gray-600 p-6 shadow-xl shadow-slate-900/10">
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-white">
                          "{testimonial.content}"
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-white">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-gray-400">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt="picture of the testimonial author"
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
                    {/* </a> */}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
