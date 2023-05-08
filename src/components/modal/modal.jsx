import { useSelector } from 'react-redux';

const AlertModal = () => {

    const modalState = useSelector(store => store.modal.isActive)
    const alertModal = useSelector(store => store.modal.message)

    return(
        <>
            <div className={`h-[5vh] w-64 m-3 absolute right-0 -z-10 ${modalState? '' : '-translate-x-[600px] lg:translate-x-[700px]'} duration-700`}>
                <div className={`flex flex-row justify-center items-center p-2 absolute top-16 lg:top-18 left-0 ${modalState? ' ' : 'bottom-96'} w-full h-full bg-black rounded-lg shadow-lg border-[1px] border-white break-words duration-300`}>
                    <h2 className="text-lg text-white text-center lg:text-2xl">{alertModal}</h2>
                </div>
            </div>
        </>

    );
}

export default AlertModal;