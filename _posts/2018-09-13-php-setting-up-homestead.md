---
layout: post
comments: true
title: "[PHP] Setting Up Homestead"
tags: [php, laravel, homestead, vagrant]
thumbnail: ['laravel.png']
cover: ['command-line.png']
---

On today's post, we're going to take a look on how to set up Homestead development environment for PHP frameworks.

First of all, it's important to have installed the following tools:

- [Virtual Box](https://www.virtualbox.org/wiki/Downloads)
- [Vagrant](https://www.vagrantup.com/downloads.html)

## Adding the Homestead Vagrant Box

Enter `vagrant box add laravel/homestead` and wait for the box to be downloaded.

Now enter `git clone https://github.com/laravel/homestead.git ~/Homestead` to have a copy of the Homestead repo in your home directory (that can be changed).

## Vagrant Settings

Now that we have everything that's necessary to get started, we'll need to add and edit the initial Homestead.yaml file, which contains information on shared folders between the host and guest systems and projects that will be served.

Mac and Linux users can enter `bash init.sh` to create the Homestead file. Open it with a text editor.

Make sure the provider matches the one you're using (virtualbox in my case, as the default) as in `provider: virtualbox`. Also include the path to your host projects folder and where it will be located in the VM. This should be enought to bring our box up for the first time.

Enter `vagrant up` on the command line and wait for it to execute. It should work just fine, but if that's not the case, we will address some common errors below.

Remove or comment out the sites section, we will get back to it soon.

This is what my Homestead.yaml file looks like (without comments):

```yaml
---
ip: "192.168.10.10"
memory: 2048
cpus: 1
provider: virtualbox

authorize: ~/.ssh/id_rsa.pub

keys:
    - ~/.ssh/id_rsa

folders:
    - map: ~/projects
      to: /home/vagrant/projects

databases:
    - homestead
```

## Editing Hosts File and Adding the First Project

We're now ready to add our first Laravel project! SSH the vm by typying `vagrant ssh` and cd into our shared projects folder, then type `laravel new <project-name>` to begin the instalation of the framework and its dependencies.

CD into the newly created project folder and copy its path with `pwd`. Open the Homestead.yaml file again in your host OS and add the following lines:

```yml
sites:
    - map: myfirstproj.test
      to: <paste-the-project-path-here>/public
```

The public directory is key here because that's where our files are going to be served from. In my case, the path to the project's public directory would be `/home/vagrant/projects/myproject/public`.

Not much left now. Type `sudo vim /etc/hosts` to edit your hosts file. It is responsible for translating human-friendly hostnames into IPs, so we can access our projects by simply going to **myfirstproj.test** on the browser.

Add the following lines:

```
# Homestead Projects
192.168.10.10  myfirstproj.test
```

Finally, we just need to restart our VM with some provisioning and the address will reflect on our project.

Just enter `vagrant restart --provision` and wait.

Try to access myfirstproj.test on the browser; you should see Laravel's default starter page.

## Common issues

- **"No input file specified" when trying to access the page**

    Make sure the path you entered in the Homestead.yaml file matches your project's public folder in the VM.

- **Vagrant error when mounting the folders**

    It's very likely that the projects path in your Homestead.yaml file does not exist. Make sure it's correct and restart the VM with `vagrant restart`.

- **Vagrant private key error**

    You need to create a private key and add it's path to the Homestead.yaml file. Instructions on how to do that [here](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/).

On the next post, we'll look into building the same development environment with Docker containers instead of using Vagrant and virtual machines.

Feel free to post your questions in the comments section below!