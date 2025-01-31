searchState.loadedDescShard("aphrodite", 0, "This provides raw methods for internal kernel usage for …\nAn error used by aphrodite\nThe main code for the kernel.\nArch-specific code.\nGeneral bootloader-independent stuff.\nTypes, constants and traits for displaying text. Mostly …\nReturns the argument unchanged.\nConverts an i16 to an [u8; 6].\nCalls <code>U::from(self)</code>.\nDefinitions of structs for multiboot2 information. Mostly …\nCreates a new error.\nArchitecture-independent output functions.\nPC Screen Font stuff\nConverts an u32 to an [u8; 10].\nConverts an u64 to an [u8; 10].\nConverts an u8 to an [u8; 3].\nConverts an usize(32 or 64 bit) to an [u8; 10].\nThe real entrypoint to the kernel. <code>internel/arch/*/entry.rs</code>…\nThe assembly port number to output debug messages to.\nReturns information from the CPUID command in the form …\nReturns whether extended functions are available (more …\nDisables paging by clearing bit 31 in the cr0 register.\nStuff for writing and reading to the EGA text buffer.\nTries to enable the a20 gate by trying many different …\nTries to enable the a20 gate by reading from port 0xee.\nTries to enable the a20 gate via fast a20. Note that this …\nTries to enable the a20 gate via the keyboard controller …\nGets data from the keyboard.\nProvides interrupt-related functions\nFunctions to output to various things\nFunctions and types related to paging.\nProvides utilities for interacting with assembly ports\nSends a keyboard command.\nSends data to the keyboard.\nReturns whether the a20 gate is enabled.\nWaits for a keyboard command to complete.\nWaits for there to be data to read from the keyboard.\nReturned when the provided position is invalid in the X …\nReturned when the provided position is invalid in the Y …\nInformation about the framebuffer.\nA pointer to the framebuffer.\nBits per pixel.\nWhether to change the cursor position after outputting …\nDisables the cursor.\nEnables the cursor.\nReturns the argument unchanged.\nGets the cursor’s location.\nThe height of the framebuffer.\nCalls <code>U::from(self)</code>.\nThe pitch of the framebuffer (i.e. the number of bytes in …\nSets the cursor’s location.\nThe width of the framebuffer.\nWrites a character to the screen.\nDisables interrupts.\nReturns whether interrupts are enabled or not.\nLoads an interrupt descriptor table.\nDisables interrupts and returns the value of them.\nRestores interrupts after a pop_irq call.\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port.\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port …\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a(n) $func_name message u8 to the debug serial …\nOutputs a(n) $func_name message u8 to the debug serial …\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port.\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port …\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a(n) $func_name message u8 to the debug serial …\nOutputs a(n) $func_name message u8 to the debug serial …\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port.\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port …\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a(n) $func_name message u8 to the debug serial …\nOutputs a(n) $func_name message u8 to the debug serial …\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port.\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port …\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a(n) $func_name message u8 to the debug serial …\nOutputs a(n) $func_name message u8 to the debug serial …\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port.\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port …\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a(n) $func_name message u8 to the debug serial …\nOutputs a(n) $func_name message u8 to the debug serial …\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;[u8] to the debug serial …\nOutputs a $func_name message &amp;[u8] and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port.\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a $func_name message &amp;str to the debug serial port …\nOutputs a $func_name message &amp;str and a newline to the …\nOutputs a(n) $func_name message u8 to the debug serial …\nOutputs a(n) $func_name message u8 to the debug serial …\nReads a byte from an IO port\nWait a short, indeterminable time\nOutputs a byte to an IO port\nOutputs an arbitrary number of bytes to an IO port\nBootloader-independent information.\nFaulty RAM modules.\nFree RAM with no use.\nReserved by something on the hardware.\nHardware-specific use. The boolean argument states whether …\nRAM used by the kernel\nMemory mapping. Used so that we can downcast.\nA single memory mapping for MemoryMap.\nA type of memory, for use in MemoryMappings. The memory …\nFlash/semi-permanent memory. Generally used in embedded …\nReserved by something.\nUnknown use.\nMemory mapping.\nThe name of the bootloader(for example, “GRUB 2.12”).\nThe commandline of the kernel. See …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the length of the memory.\nReturns the beginning of the memory.\nReturns the type of the memory.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns the number of MemoryMappings in the MemoryMap. …\nThe memory map provided by the bootloader. If None, the …\nProvides a way to display text.\nBlack-on-black.\nShould be whatever color commonly used for status messages.\nA type used for color in the functions of TextDisplay.\nSome form of display that can be written to with text.\nClears the screen.\nGets the size of the screen.\nWrites a &amp;[u8] to the screen.\nWrites a single character to the specified position.\nWrites a &amp;str to the screen.\nInformation about color, for use in FramebufferInfo.\nText information, no metadata\nInformation about the framebuffer.\nA full memory map provided by a Multiboot2 bootloader.\nOne memory section provided by a Multiboot2 bootloader.\nA Multiboot2 module. See …\nBoot info collected from provided Tags.\nThe palette for use on the framebuffer.\nA color descriptor for ColorInfo::Palette.\nRGB information for use on the framebuffer.\nThe raw memory map provided by a Multiboot2 bootloader. …\nThe root tag. The official Multiboot2 name is literally …\nUsed for Multiboot2 tags. This shouldn’t be used after a …\nA pointer to the framebuffer.\nThe base address of the section.\nThe blue value\nThe name of the bootloader(for example, “GRUB 2.12”). …\nBits per pixel.\nWe’re provided with a C-style UTF-8(null-terminated …\nColor info, stored separately from FramebufferInfo because …\nSize of one entry(one MemorySection for Aphrodite)\nSize of one entry(one MemorySection for Aphrodite)\nThe version of the memory map. Should be disregarded as it…\nThe type of the framebuffer. 0=indexed, 1=RGB, 2=text.\nProvides information on the framebuffer.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe green value\nThe height of the framebuffer.\nIterator’s index.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe length of the section.\nSee …\nThe type of the section. Name is changed from the one …\nSee above\nThe memory map provided by the bootloader.\nA pointer to the end of the module\nA pointer to the start of the module\nA string that should be in the format …\nThe pitch of the framebuffer (i.e. the number of bytes in …\nThe red value\nThe sections. This is the reason that Clone can’t be …\nAll sections.\nThe length of the tag.\nThe length of the tag.\nThe type of the tag.\nThe type of the tag.\nThe total length between the root tag and the terminating …\nThe version of the memory map. Should be disregarded as it…\nThe width of the framebuffer.\nBlue color information.\nSee above.\nGreen color information.\nSee above.\nThe number of colors in the palette.\nThe first color in the palette.\nRed color information.\nSee above.\nResets the position of output to the screen.\nOutputs a message &amp;[u8] to the terminal.\nOutputs a message &amp;[u8] and a newline to the terminal.\nOutputs a message &amp;[u8] to the terminal without a prefix.\nOutputs a message &amp;[u8] and a newline to the terminal …\nOutputs a message &amp;str to the terminal.\nOutputs a message &amp;str and a newline to the terminal.\nOutputs a message &amp;str to the terminal without a prefix.\nOutputs a message &amp;str and a newline to the terminal …\nOutputs a message u8 to the terminal.\nOutputs a message u8 to the terminal without a prefix.\nOutputs a message &amp;[u8] to the terminal.\nOutputs a message &amp;[u8] and a newline to the terminal.\nOutputs a message &amp;[u8] to the terminal without a prefix.\nOutputs a message &amp;[u8] and a newline to the terminal …\nOutputs a message &amp;str to the terminal.\nOutputs a message &amp;str and a newline to the terminal.\nOutputs a message &amp;str to the terminal without a prefix.\nOutputs a message &amp;str and a newline to the terminal …\nOutputs a message u8 to the terminal.\nOutputs a message u8 to the terminal without a prefix.\nOutputs a message &amp;[u8] to the terminal.\nOutputs a message &amp;[u8] and a newline to the terminal.\nOutputs a message &amp;[u8] to the terminal without a prefix.\nOutputs a message &amp;[u8] and a newline to the terminal …\nOutputs a message &amp;str to the terminal.\nOutputs a message &amp;str and a newline to the terminal.\nOutputs a message &amp;str to the terminal without a prefix.\nOutputs a message &amp;str and a newline to the terminal …\nOutputs a message u8 to the terminal.\nOutputs a message u8 to the terminal without a prefix.\nOutputs a message &amp;[u8] to the terminal.\nOutputs a message &amp;[u8] and a newline to the terminal.\nOutputs a message &amp;[u8] to the terminal without a prefix.\nOutputs a message &amp;[u8] and a newline to the terminal …\nOutputs a message &amp;str to the terminal.\nOutputs a message &amp;str and a newline to the terminal.\nOutputs a message &amp;str to the terminal without a prefix.\nOutputs a message &amp;str and a newline to the terminal …\nOutputs a message u8 to the terminal.\nOutputs a message u8 to the terminal without a prefix.\nOutputs a message &amp;[u8] to the terminal.\nOutputs a message &amp;[u8] and a newline to the terminal.\nOutputs a message &amp;[u8] to the terminal without a prefix.\nOutputs a message &amp;[u8] and a newline to the terminal …\nOutputs a message &amp;str to the terminal.\nOutputs a message &amp;str and a newline to the terminal.\nOutputs a message &amp;str to the terminal without a prefix.\nOutputs a message &amp;str and a newline to the terminal …\nOutputs a message u8 to the terminal.\nOutputs a message u8 to the terminal without a prefix.\nOutputs a message &amp;[u8] to the terminal.\nOutputs a message &amp;[u8] and a newline to the terminal.\nOutputs a message &amp;[u8] to the terminal without a prefix.\nOutputs a message &amp;[u8] and a newline to the terminal …\nOutputs a message &amp;str to the terminal.\nOutputs a message &amp;str and a newline to the terminal.\nOutputs a message &amp;str to the terminal without a prefix.\nOutputs a message &amp;str and a newline to the terminal …\nOutputs a message u8 to the terminal.\nOutputs a message u8 to the terminal without a prefix.\nError code returned when the PSF has an invalid magic …\nThe font selected to be the “main” font. I selected …\nThe glyph type for PCScreenFont.\nA more useful form of RawPCScreenFont.\nPC Screen Font magic number.\nOne glyph for RawPCScreenFont.\nA PC Screen font.\nThe number of bytes per glyph.\nThe raw glyph data.\nFlags. 0 if there’s no unicode table.\nFlags. 0 if there’s no unicode table.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe glyphs.\nThe glyphs.\nThe size of the header/offset of bitmaps.\nThe height of each glyph.\nThe height of this glyph.\nThe height of each glyph.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe size of this glyph.\nThe magic number. Should be 0x864ab572.\nThe number of glyphs.\nParses a PC Screen Font into a PCScreenFont.\nParses a PC Screen Font into a RawPCScreenFont.\nThe unicode translation table.\nThe version. Should be 0.\nThe version. Should be 0.\nThe width of each glyph.\nThe width of this glyph.\nThe width of each glyph.")