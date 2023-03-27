// pages/index.tsx
import { Children, ReactNode, useRef, useState } from "react";
import { Html } from "@react-three/drei"
import { GetStaticProps, GetStaticPropsContext } from "next";
import Layout from "../../components/layout/layout";
import { IPost } from "../../types/post";
import { getAllPosts } from "../../lib/mdxUtils";
import Footer from "../../components/layout/footer";
import WorksTeaser from "../../components/homePage/worksTeaser";
import LanguageShowCase from "../../components/homePage/languageShowCase";
import EmailMe from "../../components/homePage/emailMe";
import Hero from "../../components/homePage/hero";
import LanguageStrings, { langType } from "../../lib/lang";
import BlogsTeaser from "../../components/homePage/blogTeaser";
import { formatDistance } from "date-fns";
import Text from '../../components/basic/text'

type Props = {
    files: {
        posts: IPost[];
        works: IPost[];
    };
    localeString: langType;
    locale: "am" | "en";
};

const Home: React.FC<Props> = ({ files, localeString, locale }) => {
    const { posts, works } = files;
    const {
        languages,
        middleContent,
        socialMedia,
        hero,
        portfolio,
        blog,
        getConnected,
        footer,
        general,
        testimonials,
        workHistories,
    } = localeString;

    const [theme, setTheme] = useState<boolean>(false);

    const toogleTheme = () => {
        if (!theme) {
            localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
            document.body.classList.add('bg-black')

        } else {
            localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
            document.body.classList.remove('bg-black')

        }
        setTheme(!theme);
    };

    return (
        <div className=" " >
            <HeaderContainer>
                <BlogCards blogs={posts} />
            </HeaderContainer>
            <div className="bg-black  text-gray-300" >

                <div className="  2xl:max-w-screen-2xl max-w-screen-xl mx-auto" >
                    <p className="text-2xl mb-10 text-green-400">Previous Work I did</p>
                    <div className="grid gap-6 grid-cols-2">

                        {works.map(el => (
                            <div key={el.title} className=" border-b p-4 border-gray-800 py-8 rounded-sm" >
                                <h1 className="text-xl mb-4">{el.title}</h1>
                                <p className="text-sm text-gray-500">{el.type}</p>
                                <p className="text-gray-500 my-8">{el.description}</p>

                                <a href="/sdie"> Visit &rarr;</a>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;

export const getStaticProps = async ({
    locale = "en",
}: {
    locale: "am" | "en";
}) => {
    const files = getAllPosts([
        "slug",
        "date",
        "thumbnail",
        "title",
        "description",
        "hashtag",
        "color",
        "tech",
        "type",
    ]);

    const localeString: langType = LanguageStrings[locale];

    return { props: { files, localeString, locale } };
};


const HeaderContainer = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-black  text-2xl block text-gray-300" style={{ height: '100vh', width: '100%' }}  >


            <div className=" 2xl:max-w-screen-xl h-full max-w-screen-xl mx-auto" >
                <div className="flex justify-between items-center py-2 " >
                   <p className="text-green-400 text-3xl border border-green-400 p-1 " > HT</p>
                    <p className="text-base" > English</p>
                </div>
                <div className=" grid grid-cols-12 h-full justify-between  py-10" >
                    <div className="col-span-8">
                        <Header />
                    </div>
                    {/* <div className="col-span-4 ">

                        {children}
                    </div> */}
                </div>
            </div>
        </div>
    )
}


const Container = () => {
    return (
        <div className=" 2xl:max-w-screen-2xl max-w-screen-xl mx-auto" >
        </div>
    )
}

const BlogCards = ({ blogs }: { blogs: IPost[] }) => {
    return (
        <div className="my-4 flex flex-col mx-4 " >
            <h2 className="text-3xl text-green-400 mb-8" > Some of the Blogs </h2>
            {blogs.map(el => (
                <div key={el.title} className=" py-4 rounded-lg mb-4" >

                    <div className=" col-span-6 " >
                        <h3 className="text-xl font-thin text-gray-500 mb-4">
                            {el.title}

                        </h3>

                        <p className="text-sm text-gray-700 font-light mt-4" >
                            {formatDistance(new Date(el.date), new Date())}
                        </p>
                    </div>
                </div>
            ))}


        </div>
    )
}

const Header = () => {
    return (
        <div className=" pr-12 flex flex-col justify-between h-full"  >
            <div className="block">
                <div>
                    <Text classname="text-3xl font-extrabold  mb-10" > Hello, I am Henok Tsegaye</Text>
                    <p className="text-xl  text-gray-500 capitalize">
                        A full stack developer experience deeloping software
                    </p>

                    <p className="text-sm  mt-8 text-gray-500 capitalize">
                        A full stack developer experience deeloping software for different companies
                        my main experiteis comes from Nodejs , backend and forntend as well I like working with languages that I will LanguageStrings
                        some chagnes are coming to this site which i like to be honset.
                    </p>
                </div>

                <div className="grid grid-cols-6 text-sm gap-6 flex-wrap my-10  " >
                    {['JS', 'Wordpress', 'React', 'Tailwind', 'CSS', 'Nodejs'].map(el => (
                        <div className="border flex justify-center items-center text-blue-400 border-gray-800 h-20 rounded-sm ">
                            <p  > {el} </p>
                        </div>
                    ))}



                </div>
                <div className="" >
                    <p className="text-xl text-gray-300 mb-8" > Utility softwares hosted by me</p>
                    <div className="grid grid-cols-2 gap-4">

                        {new Array(2).fill(null).map(el => (<div style={{padding: 1}} className=" rounded-lg  bg-gradient-to-br from-blue-500 to-green-400 bg-gray-800 mb-2" >
                            <div className=" bg-opacity-10 bg-white  p-8 rounded-lg">
                                <h1 className="text-gray-800 text-lg mb-4" >  Flow diagram </h1>
                                <p className="text-base text-gray-900 mb-4" > a utility to share your own toghts a</p>
                                <a href="/sd" className="text-base text-gray-900" > Visit &rarr; </a>
                            </div></div>))}
                    </div>
                </div>
            </div>


            <div className="flex flex-row border-t border-gray-900 pt-8 pb-10 mb-4 text-gray-400 gap-10 text-base " >
                <a href="some links"> Previous work</a>
                <a href="some links"> Download CV </a>
                <a href="some links"> Upvote  </a>
                <a href="some links"> Playground</a>
                <a href="some links"> Send me EMail </a>

            </div>
        </div>
    )
}













import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars } from "@react-three/drei";

function Box(props) {
    const mesh = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function App() {
    return (
        <Canvas
            colorManagement
            invalidateFrameloop
            camera={{
                position: [0, 0, 50],
                fov: 75
            }}
            shadowMap
        >
            <Stars
                radius={100} // Radius of the inner sphere (default=100)
                depth={50} // Depth of area where stars should fit (default=50)
                count={7000} // Amount of stars (default=5000)
                factor={6} // Size factor (default=4)
                saturation={0} // Saturation 0-1 (default=0)
                fade // Faded dots (default=false)
            />

        </Canvas>
    )
}