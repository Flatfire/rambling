## Nearest Neighbour

One of the most common, and easiest to implement scaling algorithms is nearest neighbour scaling. Nearest neighbour, in its simplest form, works by finding the most commonly recurring value within a subset of pixels and copying this data to the missing pixels in the scaled image. Nearest neighbour averages are a common method of roughly estimating the values between points in a dataset within a particular radius. There are several variations of nearest neighbour, with some performing the bare minimum, by means of simply replicating the most nearest pixel values, while others may attempt to interpolate the values between pixels in the upscaled image, averaging between two or more pixel values when filling in data. Most implementations of this algorithm will opt to use whichever pixel is closest to their upper-left, as a result of floor division to determine pixel positions.

![Example of Nearest Neighbour Implementation](nneighbor01.png)



The benefits of nearest neighbour scaling are limited to its speed, rather than its effectiveness however. For the practice of zooming into an image, or trying to preserve the styling of retro games, it's relatively effective, but in many cases, its drawbacks largely outweigh its efficiency. Nearest neighbour works best in cases where images are scaled uniformly and aliasing is not a concern. Due to the nature of the algorithm, copying pixel data rather than assessing new potential pixel data that may lend to enhance existing detail. 