/**
 * minimum viable solution:
 * 
 * 1. Create dummy data: array of Workers and Buildings
 * 2. Create method schedule(buildings, employees)
 * 3. Print array with week days planning
 * 
 * Future improvements: 
 * 
 * a. Create UI - Have a better user interface than running it straight from a prompt
 * b. Create REST API - Transfer business logic to a separate backend
 * c. Create database - Extend functionallaty by storing teams presets 
 * 
 * Considerations:
 * 
 * The business logic should be handled in the back-end. Therefore, a REST API could be appropriate.
 * Let's say we realize a commercial building doesn't require 8 people to be done, but only 6.
 * The API should be able to receive the list buildings and employees, 
 * and return a schedule based on updated productivity parameters.
 * 
 */

// Certified installers
// Installers pending certification
// Laborers

// ● There are 3 types of buildings, each requiring a different set of employees. All installs are done
// in 1 day.
// ○ Single story homes require:
// - 1 certified installer
// ○ Two story homes require:
// - 1 certified installer AND
// - 1 installer pending certification OR a laborer
// ○ Commercial buildings require:
// - 2 certified installer AND
// - 2 installers pending certification AND
// - 4 workers of any type (cert, pending or laborer)