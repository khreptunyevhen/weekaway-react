import resortsBg from "../images/activities/resorts.jpg";
import cruisesBg from "../images/activities/cruises.jpg";
import excursionsBg from "../images/activities/excursions.jpg";

function Activities() {
  return (
    <div className="max-w-[1140px] mx-auto f-full md:flex md:justify-between mt-[-75px] relative z-[6]">
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Resorts
        </h3>
        <img
          className="w-full h-[300px] md:w-[320px] object-cover relative border-4 border-white shadow-lg"
          src={resortsBg}
          alt="weekaway resorts"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Cruises
        </h3>
        <img
          className="w-full h-[300px] md:w-[320px] object-cover relative border-4 border-white shadow-lg"
          src={cruisesBg}
          alt="weekaway cruises"
        />
      </div>
      <div className="relative p-4">
        <h3 className="absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold">
          Excursions
        </h3>
        <img
          className="w-full h-[300px] md:w-[320px] object-cover relative border-4 border-white shadow-lg"
          src={excursionsBg}
          alt="weekaway excursions"
        />
      </div>
    </div>
  );
}

export default Activities;
