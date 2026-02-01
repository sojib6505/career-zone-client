import { motion } from "framer-motion";
import banner1 from "../../assets/images/banner1.jpg"
import banner2 from "../../assets/images/banner2.jpg"


export default function Banner() {
    return (
        <div
            className=" lg:w-7xl p-5  mx-auto grid md:grid-cols-2  md:gap-5 items-center  pb-10"
        >
            <div className="col-span-1 space-y-5 md:space-y-10">
                <h1 className="font-bold text-4xl lg:text-5xl">
                    The <span className="text-primary">Easiest Way</span> <br /> to Land Your Dream Job
                </h1>
                <p className="">Start your journey to finding the right job today, with opportunities updated daily.
                    Discover roles that match your skills and take the next step in your career.
                </p>
                <div>
                    <div className="flex items-center">
                        <input 
                            className="rounded-xl w-90 lg:w-130 p-4 bg-base-100" 
                            type="text" 
                            placeholder="Search for jobs..."
                            aria-label="Search for jobs"
                        />
                        <button className="btn btn-primary -ml-24">Search</button>
                    </div>
                </div>
            </div>

            <div

                className="col-span-1">
                <motion.div
                    animate={{ y: [100, 150,100] }}
                    transition={{
                       duration:5,
                        repeat: Infinity,
                       

                    }}
                    className="w-50 md:w-60  lg:w-100">
                    <img className="w-full  border-l-6 md:border-l-12 border-b-6 md:border-b-12 rounded-t-2xl md:rounded-t-4xl border-primary" src={banner1} alt="" />

                </motion.div>
                <motion.div
                    animate={{ x: [100, 150,100] }}
                    transition={{
                        duration:10,
                        delay:5,
                        repeat: Infinity,

                    }}
                     className=" w-50 lg:w-80  left-30 ">
                    <img className=" border-b-6 md:border-b-12 rounded-r-2xl rounded-t-2xl border-l-6 md:border-l-12 md:rounded-t-[50px] md:rounded-r-[50px] border-primary" src={banner2} alt="" />
                </motion.div>

            </div>
        </div>

    )
}
