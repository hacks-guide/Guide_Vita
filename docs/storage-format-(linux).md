---
sidebar: false
---

# Storage Format (Linux)

### Required Reading

This is an add-on section for formatting a storage device for use with the StorageMgr kernel plugin.

Additionally, there is an optional section for checking your storage device for errors using F3. Depending on the size of your storage device and the speed of your computer, the checking process can take up to several hours!

This page is for Linux users only. If you are not on Linux, check out the [Storage Format (Windows)](storage-format-(windows)) or [Storage Format (Mac)](storage-format-(mac)) pages.

### What You Need

* For Kernel 5.7 and above: install [exfatprogs](https://github.com/exfatprogs/exfatprogs) for your distribution (check your package manager)
* For Kernel 5.6 and below: install [fuse-exfat](https://github.com/relan/exfat) and [exfat-utils](https://github.com/relan/exfat) for your distribution (check your package manager)
    + `fuse-exfat` package may named as `exfat-fuse` in some distribution
* The latest version of [f3](https://github.com/AltraMayor/f3/) for your distribution (check your package manager)
    + This is not required if you do not want to check your storage device for errors

### Instructions

#### Section I - Formatting Storage Device

1. Insert your storage device into your computer
1. Unmount your storage device with `umount`
1. Run `mkfs.exfat /dev/sdX` to format your storage device as exFAT
    + `sdX` should be the device corresponding to your storage device (don't point to existed partition, for example `sdX1`)
    + If your storage device has a capacity of 256 GB or greater, you must format with a cluster size of 64 KB
        + For Kernel 5.7 and above: `mkfs.exfat /dev/sdX -c 64K`
        + For Kernel 5.6 and below: `mkfs.exfat /dev/sdX -s 128K`

#### Section II - Verifying Storage Device

If you do not want to check your storage device for errors, skip this section.

1. Insert your storage device into your computer
1. Mount your storage device
1. Run `f3write <your storage device mount point>`
1. Wait until the process is complete. See below for an example output.

~~~ bash
$ f3write /media/michel/6135-3363/
Free space: 29.71 GB
Creating file 1.h2w ... OK!
...
Creating file 30.h2w ... OK!
Free space: 0.00 Byte
Average Writing speed: 4.90 MB/s
~~~

5. Run `f3read <your storage device mount point>`
1. Wait until the process is complete. See below for an example output.

~~~ bash
$ f3read /media/michel/6135-3363/
                  SECTORS      ok/corrupted/changed/overwritten
Validating file 1.h2w ... 2097152/        0/      0/      0
...
Validating file 30.h2w ... 1491904/        0/      0/      0

  Data OK: 29.71 GB (62309312 sectors)
Data LOST: 0.00 Byte (0 sectors)
               Corrupted: 0.00 Byte (0 sectors)
        Slightly changed: 0.00 Byte (0 sectors)
             Overwritten: 0.00 Byte (0 sectors)
Average Reading speed: 9.42 MB/s
~~~

If the test shows the result `Data LOST: 0.00 Byte (0 sectors)` your storage device is good and you can delete all `.h2w` files on your storage device.

If the test shows any other results, your storage device may be corrupted or damaged and you may have to replace it!

::: tip
Return to [StorageMgr](storagemgr)
:::
