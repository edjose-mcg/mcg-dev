import React from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';

import CaseDrawerFormBrain from './CaseDrawerFormBrain';

function getSteps() {
    return ['Patient ID', 'Diagnosis & Staging', 'Treatment Plan', 'Compare Options', 'Resources', 'Next Steps', 'Share'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <CaseDrawerFormBrain />;
        case 1:
            return 'Diagnosis & Staging Form';
        case 2:
            return 'Treatment Plan Form';
        case 3:
            return 'Compare Options Form';
        case 4:
            return 'Treatment Plan Form';
        case 5:
            return 'Resources Form';
        case 6:
            return 'Next Steps Form';
        default:
            return 'Unknown step';
    }
}

class HorizontalNonLinearStepperWithError extends React.Component {

    state = {
        activeStep: 0,
        skipped: new Set(),
    };

    isStepOptional = step => {
        return step === 1;
    };

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }

    isStepFailed = step => {
        return step === 1;
    };

    handleNext = () => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }
        this.setState({
            activeStep: activeStep + 1,
            skipped,
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleSkip = () => {
        const { activeStep } = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }
        const skipped = new Set(this.state.skipped.values());
        skipped.add(activeStep);
        this.setState({
            activeStep: this.state.activeStep + 1,
            skipped,
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div style={{ paddingTop: "30px" }}>
                <Stepper activeStep={activeStep} style={{ marginBottom: "30px " }}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        labelProps.icon = <QueuePlayNextIcon index={index} />
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                <div style={{ textAlign: "center" }}>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography>
                                All steps completed - you are finished!
                            </Typography>
                            <Button onClick={this.handleReset}>
                                Reset
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Typography style={{ marginBottom: "30px" }}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    style={{ marginRight: "15px" }}
                                    variant="outlined" color="secondary"
                                >
                                    Back
                                </Button>
                                {this.isStepOptional(activeStep) && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={this.handleSkip}
                                        style={{ marginRight: "15px" }}
                                    >
                                        Skip
                                    </Button>
                                )}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}
                                    style={{ marginRight: "15px" }}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

export default HorizontalNonLinearStepperWithError;
