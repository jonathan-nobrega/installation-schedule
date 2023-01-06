/**
 * List of building installation types.
 * Employees types correspond to the followinf rules:
 *      cert: Certified installers
 *      pending: Installers pending certification
 *      notCert: Installers pending certification OR a laborer
 *      laborer: Laborers
 *      any: Workers of any type (cert, pending or laborer) 
 */
const intallationType = [
    {
        type: 1,
        description: 'Single story home',
        employees: {
            cert: 1,
            pending: 0,
            notCert: 0,
            laborer: 0,
            any: 0
        }
    },
    {
        type: 2,
        description: 'Two story home',
        employees: {
            cert: 1,
            pending: 0,
            notCert: 1,
            laborer: 0,
            any: 0
        }
    },
    {
        type: 3,
        description: 'Commercial building',
        employees: {
            cert: 2,
            pending: 2,
            notCert: 0,
            laborer: 0,
            any: 4
        }
    },
]

module.exports = intallationType