# plugin_light_cms: Storefront Reference Architecture (SFRA)

Managing some contents without writing HTML.

This is the repository for the plugin_light_cms plugin. This plugin enhances the app_storefront_base cartridge by providing the possibility to manage homepage banner hero or slider without writing HTML.
In addition is also possible to create stories with different scenes.

Manage *Hero Banner* (Content Slot 'home-main-m') with

* Single Image with text over and link to a product or category
* Slider with multiple images with text over and link to a product or category
* Video

Manage *Bottom Banner* (Content Slot 'home-product-set-m') with

* Single Image with text over and link to a product or category

Manage *Story* (Content Slot 'story-scenes') with

* Single scene with a background image and simple title
* Single scene with a background image and a text with a light background
* Single scene with a background image and a text with a dark background
* Single scene with a background image, a simple title and a optional button

This plugin uses plugin_dis to resize the images dinamically.

For more details on how it works, please visit the [Wiki](https://github.com/mmatacena/plugin_light_cms/wiki) section.

# Cartridge Path Considerations

The plugin_light_cms plugin requires the plugin_dis cartridge and the app_storefront_base cartridge. In your cartridge path, include the cartridges in the following order:

```
plugin_light_cms:plugin_dis:app_storefront_base
```

The parallax effect of the story can have a different effect on mobile phones, especially on iOS devices.

# Getting Started

1. Clone this repository. (The name of the top-level folder is plugin_light_cms.)
2. In the top-level plugin_light_cms folder, enter the following command: npm install. (This command installs all of the package dependencies required for this plugin.)
3. In the top-level plugin_light_cms folder, edit the paths.base property in the package.json file. This property should contain a relative path to the local directory containing the Storefront Reference Architecture repository. For example:
```
"paths": {
    "base": "../storefront-reference-architecture/cartridges/app_storefront_base/"
  }
```
4. In the top-level plugin_light_cms folder, enter the following command: ```npm run compile:scss```
5. In the top-level plugin_light_cms folder, enter the following command: ```npm run uploadCartridge```
