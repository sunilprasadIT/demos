export default function TaskList(props) {
    return (
        <div className="flex flex-col mt-10">

            <p className={'mb-6 text-[20px] text-center'}>Tasks Added So Far 👀</p>
            <ul>
                {props?.data.map((item)=>{
                    return(
                        <>
                            <li className={'flex justify-between p-1'} key={item?.taskId}>
                                <p>{item?.taskName} <span className={'bg-blue-500 text-white text-sm ml-2 p-1 rounded'}>{item?.taskPriority}</span></p>
                                <div>
                                    <button className={'bg-gray-500 text-white rounded-[4px] px-2 text-sm mr-1'}>Edit Task</button>
                                    <button className={'bg-gray-500 text-white rounded-[4px] px-2 text-sm'}>Delete Task</button>
                                </div>
                            </li>
                        </>
                    )
                })}
            </ul>

        </div>
    )
}