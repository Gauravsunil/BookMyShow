USE [BookMyShow]
GO

/****** Object:  Table [dbo].[Movies]    Script Date: 1/11/2021 4:59:56 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[Movies]') AND type in (N'U'))
DROP TABLE [dbo].[Movies]
GO

/****** Object:  Table [dbo].[Movies]    Script Date: 1/11/2021 4:59:56 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Movies](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NULL,
	[Director] [nvarchar](max) NULL,
	[Producer] [nvarchar](max) NULL,
	[Rating] [int] NULL,
	[Price] [int] NULL,
	[Casts] [nvarchar](max) NULL,
	[Genre] [nvarchar](max) NULL,
 CONSTRAINT [PK_Movies] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


