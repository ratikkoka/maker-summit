import { Button, Accordion } from "react-bootstrap";

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
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header>Group Members</Accordion.Header>
                <Accordion.Body>
                    <div>
                        {nameList}
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}