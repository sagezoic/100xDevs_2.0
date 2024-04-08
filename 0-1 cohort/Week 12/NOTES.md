## Judge 0

- look for this this IDE
- Free and open-source online code editor that allows you to write and execute code from a rich set of languages. It's perfect for anybody who just wants to quickly write and run some code without opening a full-featured IDE on their computer. Moreover, it is also useful for teaching and learning or just trying out a new language.
- good resource if you are making something like leetcode

## Kubernetes

- go check networkchuck kubernetes tutorials they are good if you want to know more kubernetes

## Distribution

- Each and every website need to send some kind of files be it be css, html, js, mp4, mp3, etc
- Whatever which is not simple text in the DB and be greater than 400KB you can call it as objects on internet.
- The question arises what is the standard practice to get these objects?
  - Any data you want to search upon that should be stored into the database.
  - All those files which are objects should not reside inside the DB, you should store them in object stores. Amazon has a very famous one named S3 (Simple Object Store).

## CDNs

- Content Delivery Network
- So, normally we expose our Object Store through CDNs. One of the famous CDNs is AWS cloudfront
- When someone requests for content then the CDN searches in the source (our case object store) then it caches the content for a certain period so that if another request comes it doesn't have to pull it from the source. And if the stored content is not requested for a while it gets cleared.
  ![alt text](image.png)
- pop: point of presence
- So, whenever you have Object stores you have associated CDN. All the requests to the object store are going via the CDN. CDNs have multiple POPs around the world.
- Object Store: for storage
  CDN: for distribution
- Normally, the distribution cost is higher.
- So, when ask for discount you ask on cloudfront they will give you discount when you work on scale.
- Edge Network make more sense in case of backend application as the data is more user specific
- Data distribution through Object store is expensive and slow, so do use CDN with object stores

## Creating a React Build

- `npm install -g serve`
- go to dist folder and run serve command
- You can even serve your whole computer over network using the serve library

## Deploying Frontend on AWS
