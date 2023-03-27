import BlogsTeaser from '../../components/homePage/blogTeaser';
import LanguageShowCase from '../../components/homePage/languageShowCase'
import Button from '../../components/basic/genial/button';
const Ex = () => {
  return (
    <body className="bg-black h-full max-w-screen-xl mx-auto ">
      <div className="flex flex-col my-10 p-10 rounded bg-opacity-10 bg-gray-200 mx-auto max-w-screen-xl">
        <div className="text-center">
          <h1 className="text-gray-600 mb-4 text-6xl font-bold">
            Hello this is henok and I am
          </h1>
          <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Fullstack Dev
          </h1>
          <h1 className="text-gray-600 mt-6 text-6xl font-bold">
            Keeping it G!
          </h1>
        </div>
      </div>
      <Button variant='outline' color='gray'  > example </Button>
    <LanguageShowCase />
   
      <div className="grid grid-cols-2 ">
        <div className=" flex items-center justify-center">
          <div className="h-36 w-full rounded-md bg-gradient-to-r hover:from-purple-500  hover:to-pink-500 from-black to-black p-1">
            <div className="flex flex-col h-full w-full items-center justify-center bg-gray-800 back">
              <h1 className="text-5xl font-black text-white">
                tITLE
              </h1>
              <p className="text-2xl">
                more to come
              </p>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};
export default Ex;
