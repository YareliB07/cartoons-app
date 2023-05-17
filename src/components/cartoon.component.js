import React, { Component } from "react";
import TutorialDataService from "../services/cartoon.services";

export default class Tutorial extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateTutorial = this.updateTutorial.bind(this);
        this.deleteTutorial = this.deleteTutorial.bind(this);

        this.state = {
            currentTutorial: {
                id: null,
                title: "",
                description: "",
                image: "",
                published: false,
            },
            message: "",
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const { tutorial } = nextProps;
        if (prevState.currentTutorial.id !== tutorial.id) {
            return {
                currentTutorial: tutorial,
                message: ""
            };
        }

        return prevState.currentTutorial;
    }

    componentDidMount() {
        this.setState({
            currentTutorial: this.props.tutorial,
        });
    }

    onChangeTitle(e) {
        const title = e.target.value;

        this.setState(function (prevState) {
            return {
                currentTutorial: {
                    ...prevState.currentTutorial,
                    title: title,
                },
            };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState((prevState) => ({
            currentTutorial: {
                ...prevState.currentTutorial,
                description: description,
            },
        }));
    }

    updatePublished(status) {
        TutorialDataService.update(this.state.currentTutorial.id, {
            published: status,
        })
            .then(() => {
                this.setState((prevState) => ({
                    currentTutorial: {
                        ...prevState.currentTutorial,
                        published: status,
                    },
                    message: "The status was updated successfully!",
                }));
            })
            .catch((e) => {
                console.log(e);
            });
    }

    updateTutorial() {
        const data = {
            title: this.state.currentTutorial.title,
            description: this.state.currentTutorial.description,
        };

        TutorialDataService.update(this.state.currentTutorial.id, data)
            .then(() => {
                this.setState({
                    message: "The cartoon was updated successfully!",
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    deleteTutorial() {
        TutorialDataService.delete(this.state.currentTutorial.id)
            .then(() => {
                this.props.refreshList();
            })
            .catch((e) => {
                console.log(e);
            });
    }

    render() {
        const { currentTutorial} = this.state;

        return (
            <div>
                <h4>Cartoons</h4>
                {currentTutorial ? (
                    <div className="edit-form">
                        <form>
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={currentTutorial.title}
                                    onChange={this.onChangeTitle}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Descripcion</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="description"
                                    value={currentTutorial.description}
                                    onChange={this.onChangeDescription}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="url"> Imagen: </label>
                                <img src={currentTutorial.url} alt="pic" width="500" height="350" ></img>
                            </div>

                            <div className="form-group">
                                <label>
                                    <strong>Status:</strong>
                                </label>
                                {currentTutorial.published ? "Published" : "Pending"}
                            </div>
                        </form>

                        {currentTutorial.published ? (
                            <button 
                                className="btn btn-outline-secondary"
                                onClick={() => this.updatePublished(false)}
                            >
                                🕓🗯
                            </button>
                        ) : (
                            <button
                                className="btn btn-success"
                                onClick={() => this.updatePublished(true)}
                            >
                                ✅
                            </button>
                        )}

                        <button 
                            className="btn btn-danger"
                            onClick={this.deleteTutorial}
                        >
                            ❌
                        </button>

                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={this.updateTutorial}
                        >
                            🔄
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                    <div>
                        <br />
                        <p>Selecciona un personaje de caricatura</p>
                    </div>
                )}
            </div>
        );
    }
}