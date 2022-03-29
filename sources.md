# Data Mining and Image Upscaling

Data mining is for more than just finding out what kind of products you're likely to buy based on your Google search history. It's used for a wide variety of data manipulation and is a much more abstract approach to how we interpret large sums of data in general. While image data is typically much more uniform in design than scatterd points of data, there is still a need to establish relationships between the individual pixels when performing image manipulation that depends on the context of the image as a whole. In this way, there are several data mining techniques employed during image processing. Before we get to that however, some background knowledge is required.

&nbsp;
## What is image upscaling?

In a world where display technology is driven by panels consisting of many individual pixels, there remains a question: "What do you do when the image you want to display doesn't have the same number of pixels as your display?"

The answer is image scaling, or for the purposes of this discussion, image upscaling. That is, taking an image that is of a smaller resolution than intended, and resizing the image to the desired resolution without loss of detail. There are a number of techniques to achieve this, the simplest of which have been employed for decades and are commonly used in home electronics. As technology has improved, less conventional techniques that rely on machine learning and AI have also been introduced. These more advanced techniques are even capable of not just preserving detail, but improving upon it. 

&nbsp;
## Nearest Neighbour Scaling

One of the most common, and easiest to implement scaling algorithms is nearest neighbour scaling. Nearest neighbour, in its simplest form, works by finding the most commonly recurring value within a subset of pixels and copying this data to the missing pixels in the scaled image. Nearest neighbour averages are a common method of roughly estimating the values between points in a dataset within a particular radius. In the case of image processing, this radius is typically based on the scaling ratio. There are several variations of nearest neighbour, with some performing the bare minimum, by means of simply replicating the most nearest pixel values, while others may attempt to interpolate the values between pixels in the upscaled image, averaging between two or more pixel values when filling in data. Most implementations of this algorithm will opt to use whichever pixel is closest to their upper-left, as a result of floor division to determine pixel positions. 

| ![Example of Nearest Neighbour Implementation](nneighbor01.png) |
|:--:|
|Example of neighbour interpolation as applied to a 4x4 cell of pixels.|
|

The benefits of nearest neighbour scaling are limited to its speed, rather than its effectiveness. For the practice of zooming into an image, or trying to preserve the styling of retro games, it's relatively effective, but in many cases, its drawbacks largely outweigh its efficiency. Nearest neighbour works best in cases where images are scaled uniformly and aliasing is not a concern. Due to the nature of the algorithm, copying pixel data rather than assessing new potential pixel data that may lend to enhance existing detail, so the upscaled result does not truly benefit measures taken to enhance the fidelity of the image itself. For that, we'll need something a tad more robust.  

&nbsp;
## Bilinear and Bicubic Scaling

Bilinear and Bicubic scaling is considerably more 