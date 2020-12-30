import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
// import './styles.scss';

class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isDisabled: this.props.isDisabled,
            isLoading: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.isComponentMounted = true;
    }

    componentWillReceiveProps(props) {
        this.setState({
            ...props,
        });
    }

    componentWillUnmount() {
        this.setState({
            isDisabled: false,
            isLoading: false,
        });

        this.isComponentMounted = false;
    }

    handleClick() {
        this.setState({
            isLoading: true,
        });

        return this.props.onChangePromise().finally(() => {
            if (!this.isComponentMounted) {
                return;
            }

            this.setState({
                isLoading: false,
            });
        });
    }

    render() {
        const className = ClassNames('Button', {
            Button_primary: this.props.isPrimary,
            Button_secondary: this.props.isSecondary,
            Button_advanced: this.props.isAdvanced,
            Button_big: this.props.isBig,
            loading: this.state.isLoading,
        });

        return (
            <button
                onClick={this.handleClick}
                disabled={this.state.isDisabled || this.state.isLoading}
                id={this.props.elementId}
                className={className}
            >
                {this.props.icon && (
                    <div className="Button__icon">
                        {this.props.icon}
                    </div>
                )}
                {this.props.title}
            </button>
        );
    }
}

Button.propTypes = {
    elementId: PropTypes.string.isRequired,
    onChangePromise: PropTypes.func.isRequired,
    title: PropTypes.string,
    isDisabled: PropTypes.bool,
    isPrimary: PropTypes.bool,
    isSecondary: PropTypes.bool,
    isAdvanced: PropTypes.bool,
    isBig: PropTypes.bool,
    icon: PropTypes.node,
};

Button.defaultProps = {
    title: 'Ok',
    isDisabled: false,
    isPrimary: false,
    isSecondary: false,
    isAdvanced: false,
    isBig: false,
    icon: false,
};

export default Button;