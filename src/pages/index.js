export default function Home() {

  return (
    <>
        <div className="w-1/3 bg-white p-6 rounded-md shadow-md m-auto mt-6">
            <div className="flex flex-col mb-4 bg-gray-300 p-4 rounded-md">
                <p className={'mb-6 text-2xl text-center font-bold'}>Task Initializer 📝</p>
                <input type="text" placeholder="Enter your task" className="mb-4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <div className="flex flex-col mb-4">
                    <div>
                        <input type="radio" id="high-prior" name="priority" value="High" className="mr-2"  />
                        <label htmlFor="high-prior" className="mb-2 text-sm">High Priority</label>
                    </div>

                    <div>
                        <input type="radio" id="low-prior" name="priority" value="Low" className="mr-2" />
                        <label htmlFor="low-prior" className="text-sm">Low Priority</label>
                    </div>
                </div>
                <button className={'bg-gray-500 text-white rounded-md p-3'}>Add Task</button>
            </div>

        </div>

    </>
  )
}
