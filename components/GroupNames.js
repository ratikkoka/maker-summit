export default function GroupNames(props) {
    let names = props.pop;
    if (names.groupCheck == "No" || !names.members) {
        return (
            <div className="author-popup">
                <p>{names.firstName + " " + names.lastName}</p>
            </div>
            )
    }
    let nameList = names.members.map((member, index) => {
        return (
            <p key={index}>{member.first + " " + member.last}</p>
        )
    })

    return (
        <div className="author-popup">
            {nameList}
        </div>
    )
}