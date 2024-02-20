import { useState } from "react";
import { BsGridFill, BsMenuButtonWideFill } from "react-icons/bs";
import BoxCourses from "../Boxes/BoxCourses";
import GridBoxCourse from "../Boxes/GridBoxCourse";

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  const [isGrid,setIsGrid] = useState<boolean>(true)
    console.log(isGrid)
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <div className="flex justify-around items-center mt-10">
            <ul
                className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row "
                role="tablist"
            >
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal transition-all ${
                    openTab === 0
                        ? "text-white bg-primary transform -translate-y-2"
                        : "text-white-600 bg-white transform translate-y-0"
                    }`}
                    onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(0);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                >
                    <i className="fas fa-space-shuttle text-base mr-1"></i> All
                </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal transition-all ${
                    openTab === 1
                        ? "text-white bg-primary transform -translate-y-2"
                        : "text-white-600 bg-white transform translate-y-0"
                    }`}
                    onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                >
                    <i className="fas fa-space-shuttle text-base mr-1"></i> Primary
                </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal transition-all ${
                    openTab === 2
                        ? "text-white bg-primary  transform -translate-y-2"
                        : "text-white-600 bg-white  transform translate-y-0"
                    }`}
                    onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                >
                    <i className="fas fa-cog text-base mr-1"></i>  Preparatory
                </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                    className={`text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal transition-all ${
                    openTab === 3
                        ? "text-white bg-primary  transform -translate-y-2"
                        : "text-white-600 bg-white  transform translate-y-0"
                    }`}
                    onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                    }}
                    data-toggle="tab"
                    href="#link3"
                    role="tablist"
                >
                    <i className="fas fa-briefcase text-base mr-1"></i>  High
                </a>
                </li>
            </ul>
            <div className="sm:flex items-center gap-4 hidden">
              <div onClick={()=>setIsGrid(false)}
               className={`p-2  ${isGrid?"bg-gray-200":"bg-primary text-white"}  rounded-md cursor-pointer text-xl`}><BsMenuButtonWideFill/></div>
              <div  onClick={()=>setIsGrid(true)}
               className={`p-2 ${isGrid?"bg-primary text-white":"bg-gray-200"} rounded-md cursor-pointer text-xl `}><BsGridFill/></div>
            </div>
          </div>
          <div className="md:px-14 p-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded overflow-hidden transition-all">
            <div className={`px-4 py-5 flex-auto transition-all delay-300 ${openTab === 1 ? "block" : "hidden"}`}>
              <div className="tab-content tab-space">
                {isGrid?<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-100 mx-auto">
                    <BoxCourses/>
                </div>: <div className="md:w-100 mx-auto">
                    <GridBoxCourse/>
                </div>}
              </div>
            </div>
            <div className={`px-4 py-5 flex-auto transition-all delay-300 ${openTab === 2 ? "block" : "hidden"}`}>
              <div className="tab-content tab-space">
              {isGrid?<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-100 mx-auto">
                    <BoxCourses/>
                    <BoxCourses/>
                </div>: <div className="md:w-100 mx-auto">
                    <GridBoxCourse/>
                    <GridBoxCourse/>
                </div>}
              </div>
            </div>
            <div className={`px-4 py-5 flex-auto transition-all delay-300 ${openTab === 3 ? "block" : "hidden"}`}>
              <div className="tab-content tab-space">
              {isGrid?<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-100 mx-auto">
                    <BoxCourses/>
                    <BoxCourses/>
                    <BoxCourses/>
                    <BoxCourses/>
                </div>: <div className="md:w-100 mx-auto">
                    <GridBoxCourse/>
                    <GridBoxCourse/>
                    <GridBoxCourse/>
                    <GridBoxCourse/>
                </div>}
              </div>
            </div>
            <div className={`px-4 py-5 flex-auto transition-all delay-300 ${openTab === 0 ? "block" : "hidden"}`}>
              <div className="tab-content tab-space">
              {isGrid?<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-100 mx-auto">
                    <BoxCourses/>
                    <BoxCourses/>
                    <BoxCourses/>
                    <BoxCourses/>
                    <BoxCourses/>
                    <BoxCourses/>
                    <BoxCourses/>
                    <BoxCourses/>
                </div>: <div className="md:w-100 mx-auto">
                    <GridBoxCourse/>
                    <GridBoxCourse/>
                    <GridBoxCourse/>
                    <GridBoxCourse/>
                    <GridBoxCourse/>
                    <GridBoxCourse/>
                    <GridBoxCourse/>
                    <GridBoxCourse/>
                </div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs />;
    </>
  );
}
