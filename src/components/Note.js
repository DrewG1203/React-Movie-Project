import React, { Component } from 'react';
import '../css/Note.css';
import PropTypes from 'prop-types';

const GENERIC_NOTE_TITLE = "New Title", GENERIC_NOTE_BODY = "New Body", GENERIC_NOTE_GENRE = "New Genre", GENERIC_NOTE_YEAR = "New Year";

class Note extends Component {
    constructor(props) {
        super(props);
        this.titleContent = React.createRef();
        this.bodyContent = React.createRef();
        this.genreContent = React.createRef();
        this.state = {
            title: GENERIC_NOTE_TITLE,
            body: GENERIC_NOTE_BODY,
            genre: GENERIC_NOTE_GENRE,
            year: GENERIC_NOTE_YEAR,
            editMode: false
        }
    }

    handleEdit() {
        this.setState({
            editMode: true
        });
    }

    handleSave() {
        this.setState({
            title: this.titleContent.current.value,
            body: this.bodyContent.current.value,
            editMode: false
        });
    }

    handleDelete() {
        this.props.deleteHandler(this.props.id);
    }

    render() {
        let titleElement, bodyElement, genreElement, yearElement, buttonArea;
        if (this.state.editMode) {
            titleElement = <textarea ref={this.titleContent} className="title-textarea" defaultValue={this.state.title}></textarea>;
            bodyElement = <textarea ref={this.bodyContent} className="body-textarea" defaultValue={this.state.body}></textarea>;
            genreElement = <textarea ref={this.genreContent} className="genre-textarea" defaultValue={this.state.genre}></textarea>;
            yearElement = <textarea ref={this.yearContent} className="year-textarea" defaultValue={this.state.year}></textarea>;
            buttonArea = <div><button className="btn btn-primary" onClick={this.handleSave.bind(this)}>Save</button></div>;
        } else {
            titleElement = <h5 className="card-title">{this.state.title}</h5>;
            bodyElement = <p>{this.state.body}</p>;
            genreElement = <p>{this.state.genre}</p>
            yearElement = <p>{this.state.year}</p>
            buttonArea = <div><button className="btn btn-info" onClick={this.handleEdit.bind(this)}>Edit</button><button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Delete</button></div>;
        }
        return (
            <div className='col-sm-6'>
                <div className="card card-view">
                    <div className="card-body">
                        {titleElement}
                        {bodyElement}
                        {genreElement}
                        {yearElement}
                        {buttonArea}
                    </div>
                </div>
            </div>
        );

    }
}

Note.defaultProps = {
    title: "A Cool Title",
    body: "A Cool Body"
};

Note.propTypes = {
    title: PropTypes.string
};

export default Note; 