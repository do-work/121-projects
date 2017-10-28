# 121-projects

These are some general projects that I have been able to work on
during my time at 121 marketing as Support Director including
regex, SQL, JS, and PHP. Not everything is listed as some changes
are confidential and others were bug fixes in larger projects. 

## RegEx
https://regexr.com/3gvt5

## SQL
##### Tags By Month - Total
SELECT COUNT(*) AS QTY <br />
FROM 'Tickets', 'Tag Links' <br />
WHERE 'Tickets.Creation Date' = LastMonth() and ('Tag Links.Tag' NOT IN('proplan', 'ezlinks', 'courseco', 'score profitably')) <br />
GROUP BY Y('Tag Links.Tag') <br />
ORDER BY 'QTY'

##### Tags By Month - Audit
SELECT COUNT(*) <br />
FROM Tickets, 'Tag Links' <br />
WHERE Year('Tickets.Creation Date') IN '2017' <br />
GROUP BY Y('Tag Links.Tag'), X('Tickets.Creation Date':Month)