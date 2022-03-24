export default function GroupNames(props) {
    let names = props.pop;
    if (names.groupCheck == "No") {
        return (
            <p>{names.firstName + " " + names.lastName}</p>
            )
    }

    let nameList = names.members.map((member) => {
        return (
            <p>{member.first + " " + member.last}</p>
        )
    })

    return (
        <div>
            {nameList}
        </div>
    )
}