## Breadcrumb Types

There are three major types of breadcrumbs:

    Location
    Attribute
    Path

You’ve seen the first two types in our examples so far.

**1. Location** based breadcrumbs are based on where you are with respect to the navigation structure of the website. In our previous shoe shopping example, the first three li elements are location based. We are in the “shoes” section of the website, which is contained within the “fashion” section, which is contained within the “shopping” section.

**2. Attribute** based breadcrumbs are based on the attributes of the page or product that you are browsing. In our previous example, the final two li elements are attribute based. We are shopping for shoes that are “flats” and “brown”. Since the order of these attributes is not prescriptive, you’ll see some sites display these at the same level in the UI. If you want to allow users to remove attributes, provide an (x) button or similar to indicate they can be removed.

Finally, breadcrumbs can be based on a user’s unique **path** through the site. For example, if they landed on the home page, browsed to the about page and finally the registration page, their breadcrumb trail may look like:

**_Home > About > Register_**

Note that this breadcrumb trail will be different for each user and each visit. For even mildly complex sites, the number of steps will become large. To simplify the display, the beginning of the trail is often abbreviated:

**_... > About > Register_**

## Summary

In this lesson we covered the concept of using breadcrumbs as a secondary navigation method for a site:

    1. Use breadcrumbs to indicate where a user is and the extent of the site
    2. Breadcrumbs are implemented using unordered lists in HTML with custom CSS styling
    3. Three types of breadcrumbs exist:
        location - based on hierarchical structure of site
        attribute - based on attributes of current page or item
        path - unique to a user’s journey on the site
    4. Path-based breadcrumbs can be confusing, only use if needed
    5. Ensure breadcrumbs will add value before adding to a site
