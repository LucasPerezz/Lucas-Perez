import React, { useEffect } from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'
import { HiMiniCodeBracket } from 'react-icons/hi2'

export interface ISkills {
    _id: number,
    language: string,
    image: string
}



export default function Skills() {
    const skillsArray: ISkills[] = [
        {
            _id: 1,
            language: "HTML",
            image: "https://i.ibb.co/yBRbj9J/5847f5bdcef1014c0b5e489c.png"
        },
        {
            _id: 2,
            language: "CSS",
            image: "https://i.ibb.co/whTbmLq/kisspng-web-development-cascading-style-sheets-css3-html-5ae480845f38f3-0110241015249245483901.png"
        },
        {
            _id: 3,
            language: "Bootstrap",
            image: "https://i.ibb.co/nDY0fqg/kisspng-responsive-web-design-bootstrap-sass-cascading-sty-framework-5acb894bc4c191-9841223815232883.png"
        },
        {
            _id: 4,
            language: "C",
            image: "https://i.ibb.co/yskBYNz/5a36954d40bea2-0735336615135266052652.png"
        },
        {
            _id: 5,
            language: "Git",
            image: "https://i.ibb.co/WpX0hZb/kisspng-computer-icons-pro-git-portable-network-graphics-i-git-book-pro-git-app-app-5b80546c513c68-2.png"
        },
        {
            _id: 6,
            language: "Tailwind Css",
            image: "https://i.ibb.co/MhRPjrc/tailwind-css-icon.png"
        },
        {
            _id: 7,
            language: "Firebase",
            image: "https://i.ibb.co/pQZj33v/5847f40ecef1014c0b5e488a.png"
        },
        {
            _id: 8,
            language: "Node.Js",
            image: "https://i.ibb.co/xS7C56B/1200px-Node-js-logo-svg.png"
        },
        {
            _id: 9,
            language: "Express.Js",
            image: "https://i.ibb.co/YfDQNyq/Expressjs.png"
        },
        {
            _id: 10,
            language: "MongoDB",
            image: "https://i.ibb.co/P1d7jSw/mongodb-original-wordmark-logo-icon-146425.png"
        },
        {
            _id: 11,
            language: "SQL Server",
            image: "https://i.ibb.co/h7Qzc1P/microsoft-sql-server-logo.png"
        },
        {
            _id: 12,
            language: "Next.Js",
            image: "https://i.ibb.co/bX9SbKG/pngwing-com-1.png"
        },
        {
            _id: 13,
            language: "React.Js",
            image: "https://i.ibb.co/9bn3V5C/icons8-react-js-96.png"
        },
        {
            _id: 14,
            language: "Prisma ORM",
            image: "https://i.ibb.co/1KrrYrJ/icons8-prisma-orm-96.png"
        },
        {
            _id: 15,
            language: "Mongoose",
            image: "https://i.ibb.co/X47B8Q4/icons8-mongoose-96.png"
        },
        {
            _id: 16,
            language: "Github",
            image: "https://i.ibb.co/C9jPTJ5/icons8-github-96.png"
        },
        {
            _id: 17,
            language: "Postman",
            image: "https://i.ibb.co/nmTwSDk/icons8-postman-is-the-only-complete-api-development-environment-96.png"
        },
        {
            _id: 18,
            language: "JavaScript",
            image: "https://i.ibb.co/mBh5Fyn/icons8-javascript-96.png"
        },
        {
            _id: 19,
            language: "TypeScript",
            image: "https://i.ibb.co/jDsM2x4/icons8-typescript-96.png"
        }
    ]

    useEffect(() => {
        console.log("hola");
    }, [])

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full w-full container max-w-[1280px] mx-auto rounded-xl p-10 flex flex-col gap-10"
    >
    <div className="flex gap-3 items-center">
        <HiMiniCodeBracket color="#1d4ed8" size={"24px"} />
        <h3 className="text-lg md:text-xl text-blue-700">SKILLS</h3>
      </div>
    <div className='max-w-[1280px] flex justify-center items-center mx-auto flex-wrap'>
        {
            skillsArray.map((s) => {
                return <Skill key={s._id} data={s} />
            })
        }
    </div>
    </motion.section>
  )
}
