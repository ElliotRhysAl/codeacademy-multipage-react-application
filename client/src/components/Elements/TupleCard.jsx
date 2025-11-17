// Example package data structure for reference
// "standardPackage": {
//     "title": "Standard",
//     "currency": "£",
//     "price": "10",
//     "services": [
//       ["High-resolution image generation", true],
//       ["Customizable style templates", true],
//       ["Batch processing capabilities", false],
//       ["AI-driven image enhancements", false],
//       ["Seamless cloud integration", false],
//       ["Real-time collaboration tools", false]
//     ],
//     "desc": "Perfect for individuals getting started with AI image generation.",
//     "badge": null


export default function TupleCard({ pack }) {
    return (

        <div className="card w-96 min-w-75 bg-base-100 shadow-sm m-10">
            <div className="card-body">

                {pack.badge && (
                    <span className="badge badge-xs badge-warning">{pack.badge}</span>
                )}

                <div className="flex justify-around ">
                    <h2 className="text-3xl font-bold">{pack.title}</h2>
                    <span className="text-xl ml-5">{pack.currency}{pack.price}</span>
                </div>

                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {pack.services.map(([service, available], index) => (
                        <li key={index}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={available ? "size-4 me-2 inline-block text-success" : "size-4 me-2 inline-block text-base-content/50"}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className={available ? undefined : "line-through"}>{service}</span>
                        </li>
                    ))}
                </ul>

                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>

            </div >
        </div >
    );
}