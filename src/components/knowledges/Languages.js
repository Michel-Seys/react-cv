import React, {Component} from 'react';
import ProgressBar from "./ProgressBar";

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "PHP", xp: 2},
            {id: 2, value: "JS", xp: 1},
            {id: 3, value: "CSS", xp: 2},
            {id: 4, value: "Python", xp: 0.3}
        ],
        frameworks: [
            {id: 1, value: "Symfony", xp: 2},
            {id: 1, value: "React", xp: 1.2},
            {id: 1, value: "Bootstrap", xp: 1.8},
            {id: 1, value: "Sass", xp: 1},

        ]
    }

    render() {
        let {languages, frameworks} = this.state;
        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="languages"
                />
                <ProgressBar
                    title="frameworks & bibliothèques"
                    className="frameworksDiplay"
                    languages={frameworks}
                />
            </div>
        );
    }
}

export default Languages;
