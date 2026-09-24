### General Contact
- appears at the top of the contacts list
- selected by default on page load
- fields: main phone, main fax, website
### MM logins
- Menumaker customer toggle - does not exist in gold. fine if we want to omit this, but it is visual only so maybe it doesnt need to?
### feedback flyout
- i want this to be a generalized component we can throw on any page with a link to a survey
- for right now it is specific to any customer page
### Customer Jobs page
the page you land on when you click the view jobs button
- this replaces the current multi-ticket print page
- additions: 
	- filtering by job and production type
	- print button on every row
	- link back to customer page
- filters moved out of the table headers into filter pills above the table (same pattern as Inventory Quantity Upgrade's property filters): Production Type, Job Type, Job Status, Scheduling Request Status
	- each pill opens a checkbox popover with Select all / Clear and cross-filtered counts; selected values show as removable chips with Clear all
	- Job Status popover has a search box, since it can be any scan location
- rows now show Job Status and Scheduling Request as pills instead of Production Type and Job Type (those stay filterable)
	- Job Status = current scan location (latest Activity Log entry), neutral pill
	- Scheduling Request: Needs Approval (red, local .pill-error on --status-error tokens), Pending Review (gold → .pill-warn / copper warning tokens), Shipping mm/dd/yyyy (green, .pill-success)
- Implementation notes
	- FilterBar / FilterMenu → `.filter-bar` / `.filter-menu` markup in the search header + `components/filter-bar/filter-bar.css`
	- FilterChips → `#filter-chips` + `#filterChipTemplate` + chip styles in filter-bar.css
	- JobsTable status cells → `.td-status` / `.td-sched` + `.status-pill`, `.pill-error` in the page `<style>`
	- Simulated in JS ("Filter bar" section): filter state, open/close + outside-click/Escape dismiss, option search, counts, chips, row visibility — all become Angular component state / computed lists
	- Local tokens flagged in filter-bar.css: --shadow-popover (same as inventory), --duration-filter (inventory used --duration-fast, which isn't in these tokens)
### import/export contacts
- template: https://docs.google.com/spreadsheets/d/1zTnEZmK_VjR25VJW3iWF8oQxxnBwTIbIBj73b0FKoNU/edit?gid=0#gid=0
- i need to make some updates to the validation screen to better handle addresses--thinking about a dropdown?
## Styling Updates
- last item in the list gets a rounded bottom right corner. i had to do that with js but im sure there is a better way to handle that
