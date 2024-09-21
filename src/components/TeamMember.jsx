
const TeamMember = () => {
    const members = [
        {
            id: 1,
            image: "/images/member.png",
            name: "Tom Monrow",
            role: "Chef"
        },
        {
            id: 2,
            image: "/images/member.png",
            name: "Luke Devis",
            role: "Owner"
        },
        {
            id: 3,
            image: "/images/member.png",
            name: "Brodman Hammer",
            role: "Founder"
        },
        {
            id: 4,
            image: "/images/member.png",
            name: "Nicolas Vensa",
            role: "Member"
        }
    ]

    return (
        <div className="relative">
            <div className="h-72 bg-[url('/images/teambg.png')] flex justify-center">
                <div className="text-white w-1/3 text-center mt-16">
                    <h2 className="text-2xl font-bold">Team Member</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eveniet deleniti corporis veniam velit vitae dolorem?</p>
                </div>
            </div>

            <div className="absolute left-80 -bottom-36 max-w-5xl mx-auto grid grid-cols-4 gap-5">
                {
                    members.map(each =>
                        <div key={each.id} className="shadow-md">
                            <img src={each.image} className=" w-52 h-52" alt="" />
                            <div className="text-center">
                                <h5>{each.name}</h5>
                                <p>{each.role}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TeamMember;