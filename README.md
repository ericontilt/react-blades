# react-blades

Stacking window panels.

## WARNING: Unstable

This project is in alpha state and subject to heavy changes. Expect anything to change at any time. Not production ready..

## TODO'S

### back() and remove() of BladeManager

Currently the caller of the back() and remove() functions on the blademanager does not know wether the navigation
succeeded since it might be prevented by a blade. For this reason, these calls should generally not be followed by
any code expected to execute after closing the blade. I could add success callbacks as parameters to these functions
so the user would know when the actually ran to completion, but I'm not sure if this is the best way.
