export default function GroupNames(props) {
    let names = props.pop;
    if (names.groupCheck == "No" || !names.members) {
        return (
            <p>{names.firstName + " " + names.lastName}</p>
            )
    }
    let nameList = names.members.map((member, index) => {
        return (
            <p key={index}>{member.first + " " + member.last}</p>
        )
    })

    return (
        <div>
            {nameList}
        </div>
    )
}