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
    let nameList = "";
    names.members.forEach((member) => {
        nameList += member.first + " " + member.last + ", ";
    })
    nameList = nameList.substring(0, nameList.length - 2);
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
                <Accordion.Header>Group Members</Accordion.Header>
                <Accordion.Body>
                    <div>
                        <p>{nameList}</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}