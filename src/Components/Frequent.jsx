export function Frequent(){
  return(
  <div className="py-10">
  <div className="flex gap-1  justify-center ">
    <h1 className="text-2xl font-semibold">Frequently Asked</h1>
    <h1 className="text-blue-500 text-2xl font-semibold">Questions</h1>
  </div>
  <div className="grid grid-cols-[25%_75%] mt-5">
    <div className="flex flex-col gap-4 mx-20 text-xs p-4">
      <button className="w-[200px] border border-none text-blue-600 shadow drop-shadow-2xl px-4 py-3 rounded-md">
        Eligibility
      </button>
      <button className="w-[200px] border border-gray-500 text-gray-500 px-4 py-3 rounded-md">
        How to Use?
      </button>
      <button className="w-[200px] border border-gray-500 text-gray-500 px-4 py-3 rounded-md">
        Terms & Conditions
      </button>
    </div>
    <div className="grid gap-1 p-6">
      <h1 className="text-[#1A73E8]">
        Do i need to have prior Product Management and Project Management
        experience to enrool in this program?
      </h1>
      <h1 className="text-sm">
        No the program is designed to be inclusive of all the levels of
        experience. All the topics will be covered from the basics, making
        it suitable for individuals from any field of work.
      </h1>
      <h1 className=" font-semibold">
        What is the minimum system configuation required?
      </h1>
    </div>
  </div>
</div>
  )
}
