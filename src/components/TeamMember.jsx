
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
        <div className="md:relative">
            <div className="md:h-72 bg-[url('/images/teambg.png')] flex justify-center">
                <div className="text-white md:w-1/3 text-center mt-16">
                    <h2 className="text-3xl mb-2 font-bold">Team Member</h2>
                    <p className="text-sm mb-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eveniet deleniti corporis veniam velit vitae dolorem?</p>
                </div>
            </div>

            <div className="md:absolute md:left-80 md:-bottom-36 md:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
                {
                    members.map(each =>
                        <div key={each.id} className="shadow">
                            <img src={each.image} className=" md:w-52 md:h-44" alt="" />
                            <div className="text-center py-4">
                                <h5 className="text-[#4F4F4F] font-bold">{each.name}</h5>
                                <p className="text-[#828282] text-sm font-semibold">{each.role}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TeamMember;